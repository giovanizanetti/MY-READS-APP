import Book from '../Book/Book'

const BookShelf = ({ name, books, handleShelf }) => {
  return (
    <section className='bookshelf'>
      <h2 className='bookshelf-title'>{name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books && books.map((book) => <Book key={book.id} book={book} handleShelf={handleShelf} />)}
        </ol>
      </div>
    </section>
  )
}

export default BookShelf
