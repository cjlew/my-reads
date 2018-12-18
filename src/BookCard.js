import React from 'react';

const BookCard = ({ book, onUpdate }) => {

  const image = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'http://www.evolvefish.com/thumbnail.asp?file=assets/images/vinyl%20decals/EF-VDC-00035(black).jpg&maxx=300&maxy=0'
  const changeShelf = (e) => {
    onUpdate(e.target.value)
  }
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 192, backgroundImage: `url(${image})`}} />
            <div className="book-shelf-changer">
              <select onChange={changeShelf} value={book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
      </div>
    </li>
  )
}

export default BookCard
