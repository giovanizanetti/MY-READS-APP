import { useContext } from 'react'
import BookShelf from '../BookShelf/BookShelf'
import StoreContext from '../../Store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from '../Search/Search'
import ToolBar from '../ToolBar/ToolBar'

const Main = () => {
  const { currentlyReading, wantToRead, read } = useContext(StoreContext)

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='list-books'>
            <ToolBar />
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
