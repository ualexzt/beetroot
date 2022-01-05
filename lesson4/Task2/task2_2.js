function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.response)
        resolve(data)
      } else {
        reject(xhr.statusText)
      }
    }
    xhr.send()
    xhr.onerror = () => reject('Network error')
  })
}


// function handleResponse() {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     addUsersToPage(JSON.parse(xhr.response))
//   }
// }

function generateListItems(users) {
  return users
    .map((u) => `<li class="list-group-item">${u.name}</li>`)
    .join('')
}

function generateUnorderedList(listItems) {
  return `<ul class="list-group">${listItems}</ul>`
}

function addUsersToPage(users) {
  document.getElementById('users').innerHTML = users
}

/*  
Провести refactoring кода, используя  Promise
чтобы вызов функций был следующим
*/


getJSON('https://jsonplaceholder.typicode.com/users')
  .then(generateListItems)
  .then(generateUnorderedList)
  .then(addUsersToPage)

