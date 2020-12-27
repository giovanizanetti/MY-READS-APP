import { useState, useEffect } from 'react'
import { getAll, update } from '../../BooksAPI'
import BookShelf from '../BookShelf/BookShelf'

const Main = () => {
  const [books, setBooks] = useState([])
  const currentlyReading = books && books.filter((book) => book.shelf === 'currentlyReading')
  const wantToRead = books && books.filter((book) => book.shelf === 'wantToRead')
  const readBooks = books && books.filter((book) => book.shelf === 'read')

  const handleShelf = (shelf, id) => {
    const myBooks = [...books]
    const bookIndex = myBooks.findIndex((book) => book.id === id)
    myBooks[bookIndex].shelf = shelf
    setBooks(myBooks)
    update(id, shelf)
  }

  useEffect(() => {
    getAll().then((data) => setBooks(data))
  }, [])

  return (
    <div className='list-books-content'>
      <div>
        <BookShelf name='Currently Reading' books={currentlyReading} handleShelf={handleShelf} />
        <BookShelf name='Want to Read' books={wantToRead} handleShelf={handleShelf} />
        <BookShelf name='Read' books={readBooks} handleShelf={handleShelf} />
      </div>
    </div>
  )
}

export default Main
