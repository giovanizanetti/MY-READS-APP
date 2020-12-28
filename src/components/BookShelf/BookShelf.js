import Book from '../Book/Book'

const BookShelf = ({ name, books }) => {
  return (
    <section className='bookshelf'>
      <h2 className='bookshelf-title'>{name && name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>{books && books.map((book) => <Book key={book.id} book={book} />)}</ol>
      </div>
    </section>
  )
}

export default BookShelf
