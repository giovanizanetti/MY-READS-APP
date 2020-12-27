import BookShelfChanger from '../BookShelfChanger/BookShelfChanger'

const Book = ({ book, handleShelf }) => {
  const {
    imageLinks: { thumbnail },
    title,
    authors,
    shelf,
    id,
  } = book

  const bookAuthors = authors && authors.map((author) => <p key={author}>{author}</p>)

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${thumbnail})`,
            }}
          >
            <BookShelfChanger shelf={shelf} id={id} handleShelf={handleShelf} />
          </div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>{bookAuthors}</div>
      </div>
    </li>
  )
}
export default Book
