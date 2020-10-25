from app.article import article, views
from app.Common import ReturnRequest
from app.Middleware import NORMAL, TOKEN

@article.route('/Get', methods=["POST"])
@NORMAL
def Get(request):
    """获取文章
    Args:
        int     id
    
    Returns:
        id,
        title,
        introduce,
        content,
        indexshow,
        hidden,
        category,
        subcategory,
        cover,
        update_time,
        create_time
    """
    return ReturnRequest(views.Get(request.json))

@article.route('/Query', methods=["POST"])
@NORMAL
def QueryArticle(request):
    """通用文章查询接口
    Args:
        int         querypage       分页
        int         category        文章分类            1:作品, 2:文章, 3:项目
        int         subcategory     二级分类
            category: 1
                1: 设计作品, 2: 视频作品

        boolean     hidden          是否获取隐藏文章, 默认False
        boolean     indexshow       是否只获取首页展示文章, 默认False
        boolean     is_delete       是否获取已被删除的文章, 默认False
        int         per_page        单页返回数量

    Returns:
        total           一共查询到的数量
        currentPage     当前页数
        totalPages      总页数
        result          查询数据
            [{
                id,
                title,
                introduce,
                content,
                indexshow,
                hidden,
                category,
                subcategory,
                cover,
                update_time,
                create_time
            }]
    """
    return ReturnRequest(views.QueryArticle(request.json))

@article.route('/Put', methods=["POST"])
@TOKEN(1)
def PutArticle(request):
    """编辑和新增文章
    Args:
        id
        title
        introduce
        content
        category 1:作品, 2:文章, 3:项目
        subcategory 1 { 1: 设计作品, 2: 视频作品 }
        cover

    Returns:
        200, id
    """
    return ReturnRequest(views.PutArticle(request.json))

@article.route('/Change', methods=["POST"])
@TOKEN(1)
def PutChange(request):
    """变更状态
    Args:
        int     id
        int     change
            1 设置是否首页展示
            2 设置是否隐藏文章
            3 删除
    
    Returns:
        200, 成功
        400, 失败
    """
    return ReturnRequest(views.PutChange(request.json))