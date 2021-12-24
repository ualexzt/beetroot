/*
 * Написати функцію, яка отримуватиме в аргумент
 * масив votes та повертати масив унікальних значень
 * відсортованих за кількістю їх входження до масиву votes
 * Результат повинен вийти таким [react, vue, angular]
 * */

const votes = [
  'angular',
  'react',
  'vue',
  'react',
  'angular',
  'react',
  'vue',
  'react',
  'vue',
]

function getVotes(list) {
  // todo
  const res = {}
  list.forEach(item => {
    if (item in res) {
      res[item] += 1
    } else res[item] = 0

  })
  return Object.entries(res)
    .sort((a, b) => b[1] - a[1])
    // .reduce((acc, item) => {
    //   acc.push(item[0])
    //   return acc
    // }, [])
    .map(item => item[0])
}

console.log(getVotes(votes)) // [react, vue, angular]
