import Cookies from 'js-cookie'

const TokenKey = 'Token'

export function getuser() {
  return Cookies.get(TokenKey)
}

export function signin(token) {
  window.localStorage.setItem(TokenKey, token)
  return token
}

export function logout() {
  window.localStorage.removeItem(TokenKey)
}