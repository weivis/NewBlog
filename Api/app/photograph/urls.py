from app.photograph import photograph, views
from app.Common import ReturnRequest
from app.Middleware import NORMAL, TOKEN

@photograph.route('/Query', methods=["POST"])
@NORMAL
def Query(request):
    """获取照片
    Args:
        int     querypage       获取页数
        int     per_page        分页返回数量
    """
    return ReturnRequest(views.Query(request.json))

@photograph.route('/Put', methods=["POST"])
@TOKEN(1)
def Put(request):
    """照片上传
    Args:
        str         filename        文件名

    """
    return ReturnRequest(views.Put(request.json))

@photograph.route('/Del', methods=["POST"])
@TOKEN(1)
def Del(request):
    """获取照片
    Args:
        int     id              要删除的ID

    200 成功
    400 失败
    """
    return ReturnRequest(views.Del(request.json))