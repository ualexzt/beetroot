// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
// xhr.onreadystatechange = handleResponse
// xhr.send()

// function handleResponse() {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     addUsersToPage(JSON.parse(xhr.response))
//   }
// }

async function getJSON(url) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return await res.json()
}

function generateListItems(users) {
  return users
    .map((u) => `<li class="list-group-item">${u.name}</li>`).join('')

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
  .then(res => generateListItems(res))
  .then(res => generateUnorderedList(res))
  .then(res => addUsersToPage(res))

