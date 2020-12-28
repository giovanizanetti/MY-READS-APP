import { useContext } from 'react'
import BooksProvider from '../../BooksProvider'
import BookShelfChanger from '../BookShelfChanger/BookShelfChanger'
import placeholder from '../../assets/book-placeholder.jpeg'

const Book = ({ book }) => {
  console.log(book.imageLinks)
  const { selectBook, handleSelect } = useContext(BooksProvider)

  const { title, authors, shelf, id, imageLinks } = book
  const thumbnail = imageLinks ? book.imageLinks.thumbnail : placeholder

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
            <BookShelfChanger shelf={shelf} book={book} />
          </div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>{bookAuthors}</div>
      </div>
    </li>
  )
}
export default Book
