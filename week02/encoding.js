function encodingUTF8(str) {
  const charCode = str.charCodeAt(0)
  let binary = charCode.toString(2)
  let length = 0
  if (charCode < 0x80) {
    length = 1
  } else if (charCode >= 0x80 && charCode < 0x800) {
    length = 2
  } else if (charCode >= 0x800 && charCode <= 0xFFFF) {
    length = 3
  }

  const codeArr = []
  if (length === 1) {
    codeArr.push(binary)
    while (codeArr[0].length < 8) {
      codeArr[0] = insertStr(codeArr[0], 0, '0')
    }
  } else {
    for (let i = 0; i < length; i++) {
      if (i !== length - 1) {
        codeArr.unshift('10' + binary.slice(binary.length - 6))
        binary = binary.substr(0, binary.length - 6)
      } else {
        while (binary.length < 8 - length) {
          binary = insertStr(binary, 0, '0')
        }
        while (binary.length < 8) {
          binary = insertStr(binary, 0, '1')
        }
        codeArr.unshift(binary)
      }
    }
  }
  return codeArr
}

function insertStr(soure, start, newStr){
  return soure.slice(0, start) + newStr + soure.slice(start);
}
