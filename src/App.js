import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'
import { BooksProvider } from './BooksProvider'
import { getAll, update } from './BooksAPI'

const BooksApp = () => {
  const [books, setBooks] = useState([])

  const currentlyReading = books && books.filter((book) => book.shelf === 'currentlyReading')
  const wantToRead = books && books.filter((book) => book.shelf === 'wantToRead')
  const read = books && books.filter((book) => book.shelf === 'read')

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
    <div className='app'>
      <Navigation />

      <BooksProvider
        value={{
          books,
          handleShelf,
          currentlyReading,
          wantToRead,
          read,
        }}
      >
        <Main />
      </BooksProvider>
    </div>
  )
}

export default BooksApp
