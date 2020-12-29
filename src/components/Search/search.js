import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookList from '../BookList/BookList'
import { search } from '../../BooksAPI'

const Search = () => {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    query && search(query).then((data) => setSearchResults(data))
  }, [query])

  const handleChange = (e) => {
    setMessage('')
    const searchTerm = e.target.value.toLowerCase()
    if (!searchTerm) setSearchResults([])
    setQuery(searchTerm)

    if (query.length && !searchResults.length) {
      console.log('vvv')
    }
  }
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search by title or author' onChange={handleChange} value={query} />
        </div>
      </div>
      <div className='search-books-results'>
        {searchResults.length ? <BookList search={true} books={searchResults} /> : <strong>{message}</strong>}
      </div>
    </div>
  )
}

export default Search
