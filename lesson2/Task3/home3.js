/*
  * Створити функцію filter(arr, fn), яка
  * - приймає як аргументи масив arr і функцію fn
  * - повертає новий масив, який містить ті елементи arr, котрим fn повертає true.
  */

const arr = [11, 66, 33, 44, 22, 55, 2]

function filter(arr, fn) {
  // to do
  const res = []
  for (let item of arr) {
    if (fn(item)) {
      res.push(item)
    }
  }
  return res
}

// Перевірка - повернути масив з елементами значення яких більше 50
const filteredArr = filter(arr, function (item) {
  if (item > 50) {
    return item
  }
})

console.log(filteredArr) //   [66, 55]]
