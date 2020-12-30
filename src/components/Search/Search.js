import { useState, useEffect, useContext } from 'react'
import { StoreContext } from '../../Store'
import { Link } from 'react-router-dom'
import BookList from '../BookList/BookList'
import { search } from '../../BooksAPI'
import { useDebounce } from '../../hooks/useDebounce'

const Search = () => {
  const { darkTheme } = useContext(StoreContext)

  // APi query value (delayed)
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [message, setMessage] = useState('')
  // Inpute value
  const [value, setValue] = useState('')
  const darkStyleInner = { background: '#bec2be' }
  const darkStyleOuter = { background: '#4b514d' }
  const msgDarkStyle = { color: '#1fcf17' }
  //#4b514d

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
      }, 1000)
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
      <div style={darkTheme ? darkStyleOuter : null} className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            style={darkTheme ? darkStyleInner : null}
            type='text'
            placeholder='Search by title or author'
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>
      <div className='search-books-results'>
        {searchResults.length ? (
          <BookList search={true} books={searchResults} />
        ) : (
          <strong style={darkTheme ? msgDarkStyle : null}>{message}</strong>
        )}
      </div>
    </div>
  )
}

export default Search
