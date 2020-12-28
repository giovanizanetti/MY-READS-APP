import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'
import Search from './components/Search/Search'
import Store from './Store'
import { Context } from './Store'

const BooksApp = () => {
  const bla = useContext(Context)

  console.log(bla && bla, 'bla')
  return (
    <div className='app'>
      <Navigation />
      <Router>
        <Store>
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
        </Store>
      </Router>
    </div>
  )
}

export default BooksApp
