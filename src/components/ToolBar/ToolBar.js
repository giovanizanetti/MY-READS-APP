import { useContext } from 'react'
import { StoreContext } from '../../Store'
import { Link } from 'react-router-dom'
import { update } from '../../BooksAPI'

const Navigation = () => {
  const { books, setBooks } = useContext(StoreContext)

  const handleDelete = () => {
    const confirm = window.confirm('Are you sure you want to empy all your book shelfs ?')

    confirm && setBooks([])
    books.map((book) => update(book.id, 'none'))
  }

  return (
    <>
      <div className='toolbar'>
        <Link to='/search'>
          <button id='search'></button>
        </Link>
        <button id='delete' onClick={handleDelete}></button>
      </div>
    </>
  )
}

export default Navigation
