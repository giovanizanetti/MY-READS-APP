import { useContext } from 'react'
import { StoreContext } from '../../Store'
import BookList from '../BookList/BookList'

const BookShelf = ({ name, books }) => {
  const { darkTheme } = useContext(StoreContext)

  const darkStyle = { color: '#7dad7b', borderBottomColor: 'rgb(97 92 92' }
  return (
    <section className='bookshelf'>
      <h2 style={darkTheme ? darkStyle : null} className='bookshelf-title'>
        {name && name}
      </h2>
      <div className='bookshelf-books'>
        <BookList books={books} />
      </div>
    </section>
  )
}

export default BookShelf
