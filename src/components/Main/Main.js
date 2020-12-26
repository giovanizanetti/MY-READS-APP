import { useState, useEffect } from 'react'
import { getAll } from '../../BooksAPI'
import BookShelf from '../BookShelf/BooksShelf'

const Main = () => {
  const [books, setBooks] = useState([])
  const readingBooks = books && books.filter((book) => book.shelf === 'currentlyReading')
  const toReadBooks = books && books.filter((book) => book.shelf === 'wantToRead')
  const readBooks = books && books.filter((book) => book.shelf === 'read')

  useEffect(() => {
    getAll().then((data) => setBooks(data))
  }, [])

  return (
    <div className='list-books-content'>
      <div>
        <BookShelf name='Reading' books={readingBooks} />
        <BookShelf name='To Read' books={toReadBooks} />
        <BookShelf name='Read' books={readBooks} />
      </div>
    </div>
  )
}

export default Main
