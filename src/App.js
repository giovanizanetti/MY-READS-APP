import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'
import { BooksProvider } from './BooksProvider'
import { getAll, update } from './BooksAPI'
import { useHistory } from 'react-router-dom'
console.log(useHistory)

const BooksApp = () => {
  const [searchResults, setSearchResults] = useState([])
  const [books, setBooks] = useState([])

  const currentlyReading = books && books.filter((book) => book.shelf === 'currentlyReading')
  const wantToRead = books && books.filter((book) => book.shelf === 'wantToRead')
  const read = books && books.filter((book) => book.shelf === 'read')

  useEffect(() => {
    getAll().then((data) => {
      setBooks(data)
    })
  }, [])

  const handleShelf = (shelf, book) => {
    const { id } = book

    // update server
    update(id, shelf)
    // check if book is already on the shelf
    const isBook = books.find((book) => book.id === id)

    // when book already exists, change it to the selected shelf
    if (isBook !== undefined) {
      const myBooks = [...books]
      const bookIndex = myBooks.findIndex((book) => book.id === id)
      myBooks[bookIndex].shelf = shelf
      setBooks(myBooks)

      // When book does not exists, add it to the selected shelf
    } else {
      setBooks((prevBooks) => [...prevBooks, book])
      // setSelectedBook(book)
    }
  }

  return (
    <div className='app'>
      <Navigation />

      {/* Pass books down to make it available for any consumer component within the provider */}
      <BooksProvider
        value={{
          handleShelf,
          searchResults,
          setSearchResults,
          currentlyReading,
          read,
          wantToRead,
        }}
      >
        <Main />
      </BooksProvider>
    </div>
  )
}

export default BooksApp
