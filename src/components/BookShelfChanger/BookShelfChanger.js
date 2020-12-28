import { useContext } from 'react'
import BooksContext from '../../BooksProvider'

const BookShelfChanger = ({ shelf, id }) => {
  const { handleShelf, selectedBook } = useContext(BooksContext)
  console.log(selectedBook)
  return (
    <div className='book-shelf-changer'>
      {/* <select value={shelf ? shelf : 'none'} onChange={(e) => handleShelf(e.target.value, id)}> */}
      <select value={shelf ? shelf : 'none'} onChange={(e) => console.log(e.target)}>
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
