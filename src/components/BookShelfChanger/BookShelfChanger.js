import { useContext, useState } from 'react'
import StoreContext from '../../Store'

const BookShelfChanger = ({ book }) => {
  const bookShelf = book.shelf ? book.shelf : 'none'
  const { handleShelf } = useContext(StoreContext)
  const [value, setValue] = useState(bookShelf)

  const handleChange = (e) => {
    handleShelf(e.target.value, book)
    setValue(e.target.value)
  }

  return (
    <div className='book-shelf-changer'>
      <select value={value} onChange={handleChange}>
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
