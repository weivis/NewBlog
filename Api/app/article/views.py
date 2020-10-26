from app.Models import Articledb
from app.Tool import _Paginate
from app.Extensions import db

def Get(request):
    id = request.get('id',None)

    if not id:
        return 400, "ID不能为空", {}

    obj = Articledb.query.get(id)

    if not obj:
        return 400, "文章不存在", {}

    return 200, "", obj.toDict("item")

def QueryArticle(request):
    querypage = request.get('querypage',1)
    category = request.get("category", None)
    subcategory = request.get("subcategory", None)
    hidden = request.get("hidden", False)
    indexshow = request.get("indexshow", None)
    is_delete = request.get("is_delete", False)
    per_page = request.get("per_page", 10)

    querys = Articledb.query.filter().order_by(Articledb.create_time.desc())

    if category:
        querys = querys.filter_by(category = category)
        if subcategory:
            querys = querys.filter_by(subcategory = subcategory)

    if indexshow:
        querys = querys.filter_by(indexshow = True)

    if hidden:
        querys = querys.filter_by(hidden = True)

    querys = querys.filter_by(is_delete = is_delete)

    total, result, currentPage, totalPages = _Paginate(querys, querypage, per_page)

    return 200, "", {
        "total":total,
        "result":[ i.toDict() for i in result ],
        "currentPage":currentPage,
        "totalPages":totalPages
    }

def PutArticle(request):
    
    id = request.get("id", None)
    title = request.get("title", None)
    introduce = request.get("introduce", None)
    content = request.get("content", None)
    category = request.get("category", None)
    subcategory = request.get("subcategory", None)
    cover = request.get("cover", None)

    if category == 1:
        if not subcategory:
            return 400, "作品必须选择二级分类", {}

    if not category:
        return 400, "文章分类不能为空", {}

    if not title:
        return 400, "标题不能为空", {}

    if not introduce:
        return 400, "介绍不能为空", {}

    if not content:
        return 400, "文章内容不能为空", {}

    if not cover:
        return 400, "必须上传封面", {}

    if id:
        obj = Articledb.query.get(id)
        if not obj:
            return 400, "文章不存在", {}

    else:
        obj = Articledb()
    
    obj.title = title
    obj.introduce = introduce
    obj.content = content
    obj.cover = cover
    obj.category = category
    if category == 1:
        obj.subcategory = subcategory
    db.session.add(obj)
    db.session.commit()

    return 200, "", dict(
        id = obj.id
    )


def PutChange(request):

    id = request.get("id", None)
    change = request.get("change", None)

    if not id:
        return 400, "ID为空", {}

    if not change:
        return 400, "操作类型为空", {}

    change = int(change)

    obj = Articledb.query.get(id)

    if not obj:
        return 400, "文章不存在", {}

    if change == 1:
        obj._change_indexshow()
        return 200, "设置成功", {}

    if change == 2:
        obj._change_hidden()
        return 200, "设置成功", {}

    if change == 3:
        db.session.delete(obj)
        db.session.commit()
        return 200, "删除成功", {}

    return 400, "操作异常", {}