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

  const handleShelf = (shelf, id, book) => {
    console.log(id)
    const myBooks = [...books]
    if (id) {
      const bookIndex = myBooks.findIndex((book) => book.id === id)
      myBooks[bookIndex].shelf = shelf
    }
    if (book) {
      myBooks.push(book)
    }
    setBooks(myBooks)
    update(id, shelf)
  }

  handleSelect = (book) => {
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
