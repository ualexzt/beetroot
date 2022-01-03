class Book {
  constructor(name, genre, author, isRead, nextRead, dateRead) {
    this.name = name
    this.genre = genre
    this.author = author
    this.isRead = isRead
    this.nextRead = nextRead
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
    this.nowReadBook['nextRead'] = true
    if (!this.allBook.includes(this.nowReadBook)) {
      this.addBookToAll(this.nowReadBook)
    }
    this.nextReadBook = this.#addNextBook(this.allBook.find(item => item['isRead'] === false && item['nextRead'] === false))
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
      this.nowReadBook['nextRead'] = false
      this.nowReadBook['dateRead'] = Date()
      this.lastReadBook = this.nowReadBook
    }
    this.nowReadBook = this.allBook.find(item => item['nextRead'] === true && item['isRead'] === false)
    this.nextReadBook = this.#addNextBook(this.allBook.find(item => item['isRead'] === false && item['nextRead'] === false))
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

  #addNextBook(book) {
    if (book !== undefined) {
      book['nextRead'] = true
    }
    return book
  }
}
