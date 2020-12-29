import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookList from '../BookList/BookList'
import { search } from '../../BooksAPI'
import { useDebounce } from '../../hooks/useDebounce'

const Search = () => {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [message, setMessage] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('calAPI')
    if (!query) {
      setSearchResults([])
      setMessage('')
    }
    query && search(query).then((data) => setSearchResults(data))
  }, [query])

  const debouncedSave = useDebounce((value) => setQuery(value), 500)

  const handleChange = (e) => {
    setMessage('')
    const text = e.target.value.toLowerCase()
    setValue(text)
    debouncedSave(text, 500)
    if (value.length && !searchResults.length) {
      setMessage('Not found! Try another search term!')
    }
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
