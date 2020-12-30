import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookList from '../BookList/BookList'
import { search } from '../../BooksAPI'
import { useDebounce } from '../../hooks/useDebounce'

const Search = () => {
  // APi query value (delayed)
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [message, setMessage] = useState('')
  // Inpute value
  const [value, setValue] = useState('')

  // fetch api
  useEffect(() => {
    if (!query) {
      setSearchResults([])
      setMessage('')
    }
    query && search(query).then((data) => setSearchResults(data))
  }, [query])

  // display message
  useEffect(() => {
    if (query.length && !searchResults.length) {
      setTimeout(() => {
        setMessage('Not found! Try another search term!')
      }, 800)
    }
  }, [query, searchResults])

  const debouncedSave = useDebounce((value) => setQuery(value), 500)

  const handleChange = (e) => {
    const text = e.target.value.toLowerCase()
    // input value to display immediately
    setValue(text)
    // delay query to deminish api calls
    debouncedSave(text)
  }

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search by title or author' onChange={handleChange} value={value} />
        </div>
      </div>
      <div className='search-books-results'>
        {searchResults.length ? <BookList search={true} books={searchResults} /> : <strong>{message}</strong>}
      </div>
    </div>
  )
}

export default Search
