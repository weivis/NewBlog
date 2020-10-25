from app.Models import Photograph
from app.Tool import _Paginate
from app.Extensions import db

def Put(request):
    filename = request.get("filename",None)

    if not filename:
        return 400, "文件名不能为空", {}

    add = Photograph()
    add.file = filename
    db.session.add(add)
    db.session.commit()

    return 200, "", {}

def Query(request):
    querypage = request.get('querypage',1)
    per_page = request.get("per_page", 10)

    querys = Photograph.query.filter().order_by(Articledb.create_time.desc())

    total, result, currentPage, totalPages = _Paginate(querys, querypage, per_page)

    return 200, "", {
        "total":total,
        "result":[ i.toDict() for i in result ],
        "currentPage":currentPage,
        "totalPages":totalPages
    }

def Del(request):
    id = request.get("id")

    obj = request.query.get(id)
    if obj:
        db.session.delete(obj)
        db.session.commit()
        return 200, "", {}
    if not obj:
        return 400, "找不到删除对象", {}