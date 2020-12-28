import BookList from '../BookList/BookList'

const BookShelf = ({ name, books, search }) => {
  return (
    <section className='bookshelf'>
      <h2 className='bookshelf-title'>{name && name}</h2>
      <div className='bookshelf-books'>
        <BookList books={books} search={search} />
      </div>
    </section>
  )
}

export default BookShelf
