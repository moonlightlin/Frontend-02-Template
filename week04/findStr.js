function findA(str) {
  for (c of str) {
    if (c === 'a') {
      return true
    }
  }
  return false
}

function findAB(str) {
  let isA = false

  for (c of str) {
    if (c === 'a') {
      isA = true
    } else if (isA && c === 'b') {
      return true
    } else {
      isA = false
    }
  }

  return false
}

/**
 * 查找str中是否包含targetStr
 * @param {*} str 
 * @param {*} targetStr 
 */
function findTarget(str, targetStr) {
  let targetIndex = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === targetStr[targetIndex]) {
      if (targetIndex === targetStr.length - 1) {
        return true
      }
      targetIndex++
    } else {
      targetIndex = 0
      if (str[i] === targetStr[targetIndex]) {
        targetIndex++
      }
    }
  }

  return false
}



// console.log(findA('esdbc'))

// console.log(findAB('weadbds'))
// console.log(findAB('weabdbds'))
// console.log(findAB('webadbds'))

console.log(findTarget('abcdef', 'abcdef'))
console.log(findTarget('abcdabcde', 'abcdef'))
console.log(findTarget('abcdabcdef', 'abcdef'))
console.log(findTarget('abcdabef', 'abcdef'))
console.log(findTarget('babcdef', 'abcdef'))

