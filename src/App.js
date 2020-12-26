import './App.css'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'

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
      {/* <div className='list-books'> */}
      <Main />
      <div className='open-search'>
        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
      </div>
      {/* </div> */}
    </div>
  )
}

export default BooksApp
