class Book {
  constructor(name, genre, author, isRead, dateRead) {
    this.name = name
    this.genre = genre
    this.author = author
    this.isRead = isRead
    this.dateRead = dateRead
  }
}

class BookList {
  constructor(
    readyRead,
    wishRead,
    nextReadBook,
    nowReadBook,
    lastReadBook,
    allBook,
  ) {
    this.readyRead = readyRead || 0
    this.wishRead = wishRead || 0
    this.nextReadBook = nextReadBook || {}
    this.nowReadBook = nowReadBook || {}
    this.lastReadBook = lastReadBook || {}
    this.allBook = allBook || []
    this.#countBookState()
  }

  addBookToRead(book) {
    if (this.nowReadBook) {
      this.lastReadBook = this.nowReadBook
    }
    this.nowReadBook = book
    if (!this.allBook.includes(this.nowReadBook)) {
      this.addBookToAll(this.nowReadBook)
    }
    this.nextReadBook = this.allBook.find(item => item['isRead'] === false && this.nowReadBook['name'] !== item['name'])
  }

  addBookToAll(book) {
    if (this.allBook === undefined) {
      this.allBook = [book]
    } else {
      this.allBook = [...this.allBook, book]
    }
  }

  finishCurrentBook() {
    if (this.nowReadBook) {
      this.nowReadBook['isRead'] = true
      this.nowReadBook['dateRead'] = Date()
      this.lastReadBook = this.nowReadBook
    }
    this.nowReadBook = this.nextReadBook
    this.nextReadBook = this.allBook.find(item => item['isRead'] === false && this.nowReadBook['name'] !== item['name'])
    this.#countBookState()
  }

  #countBookState() {
    let countRead = 0
    let countNoRead = 0
    for (let book of this.allBook) {

      if (book['isRead']) {
        countRead += 1
      } else {
        countNoRead += 1
      }
    }
    this.readyRead = countRead
    this.wishRead = countNoRead
  }
}

const book = new Book('book1', 'ganre1', 'author1', false)
const book2 = new Book('book2', 'ganre2', 'author2', false)
const book3 = new Book('book3', 'ganre2', 'author2', false)
const book4 = new Book('book4', 'ganre1', 'author3', false)

const bookList = new BookList()
