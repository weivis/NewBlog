from app.Models import AccountAdmin

def adminLogin(request):
    account = request.get("account")
    password = request.get("password")

    account = AccountAdmin.query.filter_by(account=account).first()

    if not account:
        return 400, "账户不存在", {}

    if account._is_correct_password(password):
        gentoken = account._set_token()

        return 200, "", dict(
            token = gentoken,
            username = account.username
        )

    else:

        return 400, "密码不正确", {}