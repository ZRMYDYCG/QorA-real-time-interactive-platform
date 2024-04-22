// 设置localStorage
export function setLocalStorage(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 获取localStorage
export function getLocalStorage(key) {
  let value = localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

// 删除localStorage
export function removeLocalStorage(key) {
  localStorage.removeItem(key)
}

// 清除所有localStorage
export function clearLocalStorage() {
  localStorage.clear()
}

// 设置sessionStorage
export function setSessionStorage(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  sessionStorage.setItem(key, value)
}

// 获取sessionStorage
export function getSessionStorage(key) {
  let value = sessionStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

// 删除sessionStorage
export function removeSessionStorage(key) {
  sessionStorage.removeItem(key)
}

// 清除所有sessionStorage
export function clearSessionStorage() {
  sessionStorage.clear()
}
