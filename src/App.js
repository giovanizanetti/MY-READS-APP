import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'
import Search from './components/Search/Search'

const BooksApp = () => {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false,
  // }

  return (
    <div className='app'>
      <Navigation />
      <Router>
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
      </Router>
    </div>
  )
}

export default BooksApp
