import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BookShelf from '../BookShelf/BookShelf'

const Search = () => {
  const [query, setQuery] = useState('')

  const handleChange = (e) => setQuery(e.target.value)

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input type='text' placeholder='Search by title or author' onChange={handleChange} />
        </div>
      </div>
      <div className='search-books-results'>
        <BookShelf />
        {/* <ol className='books-grid'></ol> */}
      </div>
    </div>
  )
}

export default Search
