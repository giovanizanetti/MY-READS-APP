import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'
import { BooksProvider } from './BooksProvider'
import { getAll, update } from './BooksAPI'

const BooksApp = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  const currentlyReading = books && books.filter((book) => book.shelf === 'currentlyReading')
  const wantToRead = books && books.filter((book) => book.shelf === 'wantToRead')
  const read = books && books.filter((book) => book.shelf === 'read')

  const handleShelf = (shelf, book) => {
    const { id } = book
    const myBooks = [...books]
    // check if book is already
    const isBook = myBooks.find((book) => book.id === id)

    // when book already exists, change it to the selected shelf
    if (isBook !== undefined) {
      const bookIndex = myBooks.findIndex((book) => book.id === id)
      myBooks[bookIndex].shelf = shelf
      console.log('this book is already there')
      // When book does not exists, add it to teh selected shelf
    } else {
      myBooks.push(book)
    }
    // update state
    setBooks(myBooks)
    // update sever
    update(id, shelf)
    // update selected book
    setSelectedBook(null)
  }

  const handleSelect = (book) => {
    console.log(book)
    setSelectedBook(book)
  }

  useEffect(() => {
    getAll().then((data) => setBooks(data))
  }, [])

  return (
    <div className='app'>
      <Navigation />

      {/* Pass books down to make it available for any consumer component within the provider */}
      <BooksProvider
        value={{
          books,
          handleShelf,
          currentlyReading,
          wantToRead,
          read,
          selectedBook,
          handleSelect,
        }}
      >
        <Main />
      </BooksProvider>
    </div>
  )
}

export default BooksApp
