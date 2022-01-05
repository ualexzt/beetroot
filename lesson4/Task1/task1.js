/*
    Вывести на странице 5 постов с ресурса
    http://jsonplaceholder.typicode.com/posts?_start=8&_limit=5

    В произвольной форме вывести
    - заголовок поста
   - ссылку на автора этого поста
      <span class="author-link">Get author</span>

    При клике на ссылку "Get author" выполнить запрос на сервер
    https://jsonplaceholder.typicode.com/users/<ID_автора>
    https://jsonplaceholder.typicode.com/posts?userId=1
     - name, username, email
     - количество постов этого user

    */


const posts = document.getElementById('posts')

async function getPosts() {
  try {
    let response = await fetch('http://jsonplaceholder.typicode.com/posts?_start=8&_limit=5')
    let data = await response.json()
    const blog = data.map(post => `
        <div class="py-2">
        <h3>${post.title}</h3> 
          <p>${post.body}</p>
          <span id='${post.id}' class="btn btn-secondary" onclick="getUser(${post.userId}, ${post.id})">Get author</span>
          <hr>
        </div>
      `,
    )
    posts.innerHTML = blog.join('')
  } catch (e) {
    console.log('Error fetch data' + e)
  }
}

async function getUser(id, postId) {
  const span = document.getElementById(`${postId}`)
  try {
    let res = await fetch(` https://jsonplaceholder.typicode.com/users/${id}`)
    let count = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    let user = await res.json()
    let countPost = await count.json()
    const userInfo = `
    <div>
        <h6>Author: ${user.name}</h6>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Post count: ${countPost.length}</p>
        </div>
     `
    span.innerHTML = userInfo
    span.className = ''

  } catch (e) {
    console.log('Error fetching' + e)
  }

}

getPosts()





