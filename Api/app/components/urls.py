from app.components import components, views
from app.Common import ReturnRequest
from app.Middleware import NORMAL, TOKEN

@components.route('/Query', methods=["POST"])
@NORMAL
def Query(request):
    """Query
    Args:
        str     components      组件名
        int     limit           返回条数
    Returns:
        id
        components
        totype
        data
        sort
    """
    return ReturnRequest(views.Query(request.json))

@components.route('/Put', methods=["POST"])
@TOKEN(1)
def Put(request):
    """Put
    Args:
        str     components      组件名
        int     totype          类型            1 = 站内文章ID 2 = 站外链接
        str     data            数据
        str     cover           封面
        str     title           标题
        str     introduce       介绍
    Returns:
        200     成功
        400     失败
    """
    return ReturnRequest(views.Put(request.json))

@components.route('/Del', methods=["POST"])
@TOKEN(1)
def Del(request):
    """Del
    Args:
        int     id              要删除的数据id
    Returns:
        200     成功
        400     失败
    """
    return ReturnRequest(views.Del(request.json))