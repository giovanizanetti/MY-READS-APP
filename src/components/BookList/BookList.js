import Book from '../Book/Book'

const BookList = (books) => {
  return <ol className='books-grid'>{books && books.map((book) => <Book book={book} />)}</ol>
}

export default BookList
