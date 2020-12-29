import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookList from '../BookList/BookList'
import { search } from '../../BooksAPI'

const Search = () => {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    query && search(query).then((data) => setSearchResults(data))
  }, [query])

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    if (!searchTerm) setSearchResults([])
    setQuery(searchTerm)
  }
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
          <input type='text' placeholder='Search by title or author' onChange={handleChange} value={query} />
        </div>
      </div>
      <div className='search-books-results'>
        {searchResults.length ? <BookList search={true} books={searchResults} /> : <strong>'No books found'</strong>}
      </div>
    </div>
  )
}

export default Search
