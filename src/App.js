import { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'
import Search from './components/Search/Search'
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
      <Router>
        <BooksProvider
          value={{
            books,
            handleShelf,
            currentlyReading,
            wantToRead,
            read,
          }}
        >
          <Switch>
            <Route exact path='/'>
              <div className='list-books'>
                <Main />
                <Link to='/search' className='open-search'>
                  <button>Add a book</button>
                </Link>
              </div>
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
          </Switch>
        </BooksProvider>
      </Router>
    </div>
  )
}

export default BooksApp
