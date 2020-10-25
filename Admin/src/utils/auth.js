const TokenKey = 'AdminToken'

export function getuser() {
  return window.localStorage.getItem(TokenKey)
}

export function signin(token) {
  console.log("记录用户",TokenKey, token)
  window.localStorage.setItem(TokenKey, token)
  return token
}

export function logout() {
  window.localStorage.removeItem(TokenKey)
  console.log("退出登录")
}