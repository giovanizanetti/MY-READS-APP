import Book from '../Book/Book'

const BookList = ({ books, search }) => {
  return (
    <ol className='books-grid'>{books && books.map((book) => <Book key={book.id} book={book} search={search} />)}</ol>
  )
}

export default BookList
