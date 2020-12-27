import './App.css'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
        <div className='list-books'>
          <Main />
          <div className='open-search'>
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default BooksApp
