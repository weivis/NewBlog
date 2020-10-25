const TokenKey = 'AdminToken'

export function getuser() {
  return window.localStorage.getItem(TokenKey)
}

export function signin(token) {
  console.log(TokenKey, token)
  window.localStorage.setItem(TokenKey, token)
  return token
}

export function logout() {
  window.localStorage.removeItem(TokenKey)
}