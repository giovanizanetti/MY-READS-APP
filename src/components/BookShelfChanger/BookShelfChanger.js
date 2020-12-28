import { useContext } from 'react'
import BooksContext from '../../BooksProvider'

const BookShelfChanger = ({ shelf, book }) => {
  const { handleShelf } = useContext(BooksContext)

  return (
    <div className='book-shelf-changer'>
      <select value={book.shelf ? book.shelf : 'none'} onChange={(e) => handleShelf(e.target.value, book)}>
        {/* <select value={shelf} onChange={(e) => handleChange(e, book)}> */}
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
