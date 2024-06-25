const str = 'abcdefgh'
const result = []

const func = (temp, index) => {
  if (index === str.length - 1) {
    result.push(temp + '.' + str[index])
    result.push(temp + str[index])
    return
  }
  func(temp + '.' + str[index], index + 1)
  func(temp + str[index], index + 1)
}

func(str[0], 1)

console.log('result = ', result)
