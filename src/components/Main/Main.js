import { useContext } from 'react'
import BookShelf from '../BookShelf/BookShelf'
import BooksContext from '../../BooksProvider'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Search from '../Search/Search'

const Main = () => {
  const { currentlyReading, wantToRead, read } = useContext(BooksContext)

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='list-books'>
            <div className='list-books-content'>
              <div>
                <BookShelf name='Currently Reading' books={currentlyReading} />
                <BookShelf name='Want to Read' books={wantToRead} />
                <BookShelf name='Read' books={read} />
              </div>
            </div>
            <Link to='/search' className='open-search'>
              <button>Add a book</button>
            </Link>
          </div>
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
      </Switch>
    </Router>
  )
}

export default Main
