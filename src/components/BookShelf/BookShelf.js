import { useContext } from 'react'
import { StoreContext } from '../../Store'
import BookList from '../BookList/BookList'
import icon from '../../icons/delete.svg'
import { update } from '../../BooksAPI'

const BookShelf = ({ name, books }) => {
  const { darkTheme, currentlyReading, read, wantToRead, setBooks } = useContext(StoreContext)
  const darkStyle = { color: '#7dad7b', borderBottomColor: 'rgb(97 92 92' }

  const handleDelete = () => {
    if (name === 'Currently Reading') {
      setBooks([...wantToRead, ...read])
    }
    if (name === 'Want to Read') {
      setBooks([...currentlyReading, ...read])
    }
    if (name === 'Read') {
      setBooks([...currentlyReading, ...wantToRead])
    }

    books.map((book) => update(book.id, 'none'))
    console.log(name)
  }

  return (
    <section className='bookshelf'>
      <div>
        <h2 style={darkTheme ? darkStyle : null} className='bookshelf-title'>
          {name && name}
        </h2>
        {books.length ? <img onClick={handleDelete} width='26px' src={icon} alt='empty shelf' /> : ''}
      </div>

      <div className='bookshelf-books'>
        <BookList books={books} />
      </div>
    </section>
  )
}

export default BookShelf
