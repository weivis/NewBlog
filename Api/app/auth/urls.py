from app.auth import auth, views
from app.Common import ReturnRequest
from app.Middleware import NORMAL, TOKEN

@auth.route('/adminLogin', methods=["POST"])
@NORMAL
def adminLogin(request):
    """管理员登录接口
    Args:
        str     account     账户
        str     password    密码

    Returns:
        {
            "code": 200,
            "data": {
                "token": "21f655b1e334004f3937c8e84a0c0c43",
                "username": "Administrator"
            },
            "msg": "成功"
        }
    Code:
        200 成功
        400 账户不存在
    """
    return ReturnRequest(views.adminLogin(request.json))