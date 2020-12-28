import { useContext } from 'react'
import BooksContext from '../../BooksProvider'

const BookShelfChanger = ({ shelf, book }) => {
  const { handleShelf, handleSelect, selectedBook } = useContext(BooksContext)

  const handleChange = (e, book) => {
    // console.log(book)
    // console.log(e.target)
    handleSelect(book)
    handleShelf(e.target.value, book)
    // console.log(e.target.value)
    // console.log(selectedBook)
  }

  return (
    <div className='book-shelf-changer'>
      {/* <select value={shelf ? shelf : 'none'} onChange={(e) => handleShelf(e.target.value, id)}> */}
      <select value={shelf ? shelf : 'none'} onChange={(e) => handleChange(e, book)}>
        <option value='move' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger
