import { useContext } from 'react'
import BookShelf from '../BookShelf/BookShelf'
import StoreContext from '../../Store'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Search from '../Search/Search'

const Main = () => {
  const { currentlyReading, wantToRead, read } = useContext(StoreContext)

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='list-books'>
            <div className='toolbar'>
              <Link to='/search'>
                <button id='search'>Add a book</button>
              </Link>
              <Link to='/search'>
                <button id='delete'>Add a book</button>
              </Link>
            </div>
            <div className='list-books-content'>
              <div>
                <BookShelf name='Currently Reading' books={currentlyReading} />
                <BookShelf name='Want to Read' books={wantToRead} />
                <BookShelf name='Read' books={read} />
              </div>
            </div>
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
