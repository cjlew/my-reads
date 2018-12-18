import React from 'react'
import BookCard from './BookCard'

const BookShelf = ({ title, books, changeShelf }) => {
  const updateBook = (book, shelf) => {
    changeShelf(book, shelf)
  }
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            onChange={(shelf) => {updateBook(book, shelf)}}
          />
        ))}
      </ol>
    </div>
  </div>
  )
}

export default BookShelf
