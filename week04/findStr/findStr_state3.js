// 用状态机实现：字符串“abababx”的解析

function match(string) {
  let state = start
  for (let c of string) {
    state = state(c)
  }
  return state === end
}

function start(c) {
  if(c === 'a') {
    return foundA
  } else {
    return start
  }
}

function end(c) {
  return end
}

function foundA(c) {
  if(c === 'b') {
    return foundB
  } else {
    return start(c)
  }
}

function foundB(c) {
  if(c === 'a') {
    return foundA2
  } else {
    return start
  }
}

function foundA2(c) {
  if(c === 'b') {
    return foundB2
  } else {
    return start
  }
}

function foundB2(c) {
  if(c === 'a') {
    return foundA3
  } else {
    return start
  }
}

function foundA3(c) {
  if(c === 'b') {
    return foundB3
  } else {
    return start
  }
}

function foundB3(c) {
  if(c === 'x') {
    return end
  } else {
    return foundB2(c)
  }
}

console.log(match('ababx'))
console.log(match('abababx'))
console.log(match('ababababx'))
console.log(match('abababababx'))
console.log(match('ababbababx'))
