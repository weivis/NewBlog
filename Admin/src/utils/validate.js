/**
 * 普通输入框必填的校验
 */
export const checkRqInput = {
  required: true,
  message: '请填写此字段',
  trigger: 'blur'
}
/**
 * 上传附件必填的校验
 */
export const checkRqFile = {
  required: true,
  message: '请选择文件',
  trigger: 'change'
}
/**
 * 普通下拉选择必填的校验
 */
export const checkRqSelect = {
  required: true,
  message: '请在列表中选择一项',
  trigger: 'change'
}
/**
 * 普通下拉选择必填的校验
 */
export const checkRqMulSelect = {
  type: 'array',
  message: '请在列表中选择一项',
  trigger: 'change',
  validator: function(rule, value, callback) {
    if (value.length) {
      callback()
    } else {
      callback(new Error('请选择至少一项'))
    }
  }
}
/**
 * 密码框必须大于6位的校验
 */
export const checkPwdLength = {
  min: 6,
  message: '长度为6个字符以上',
  trigger: 'blur'
}
/**
 * 手机号码格式的校验
 */
export const checkTel = {
  trigger: 'blur',
  validator: function(rule, value, callback) {
    if (/^1[3-8]\d{9}$/.test(value) || value === '') {
      callback()
    } else {
      callback(new Error('请输入正确的手机号码'))
    }
  }
}
/**
 *  中文的校验
 */
export const checkChinese = {
  trigger: 'blur',
  validator: function(rule, value, callback) {
    if (/^[\u4E00-\u9FA5]+$/.test(value) || value === '') {
      callback()
    } else {
      callback(new Error('请输入正确的汉字'))
    }
  }
}
/**
 * 邮箱的校验
 */
export const checkEmail = {
  trigger: 'blur',
  validator: function(rule, value, callback) {
    if (/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value) || value === '') {
      callback()
    } else {
      callback(new Error('请输入正确的邮箱'))
    }
  }
}
/**
 * 传真的校验
 */
export const checkFax = {
  trigger: 'blur',
  validator: function(rule, value, callback) {
    if (/^(\d{3,4}-)?\d{7,8}$/.test(value) || value === '') {
      callback()
    } else {
      callback(new Error('请输入正确的传真'))
    }
  }
}
/**
 * qq号的校验
 */
export const checkQQ = {
  trigger: 'blur',
  validator: function(rule, value, callback) {
    if (/^[1-9]\d{4,11}/.test(value) || value === '') {
      callback()
    } else {
      callback(new Error('请输入正确的QQ'))
    }
  }
}
/**
 * 日期必填
 */
export const checkRqDate = {
  required: true,
  message: '请填写此字段',
  trigger: 'change'
}
/**
 * 类型是数组的校验
 */
export const checkArray = {
  type: 'array',
  message: '该字段是数组',
  trigger: 'change'
}

// export function isvalidUsername(str) {
//   const valid_map = ['admin', 'editor']
//   return valid_map.indexOf(str.trim()) >= 0
// }
// 
// 路径校验
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}


