import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

const BookShelves = (props) => {
	const { books, onChange } = props;

	return (
		<div className="list-books-content">
			<BookShelf
				title="Currently Reading"
				books={books.filter((book) => (book.shelf === "currentlyReading"))}
				shelf="currentlyReading"
				changeShelf={onChange}
			/>
      <BookShelf
      	title="Want to Read"
      	books={books.filter((book) => (book.shelf === "wantToRead"))}
      	shelf="wantToRead"
      	changeShelf={onChange}
      />
      <BookShelf
      	title="Read"
      	books={books.filter((book) => (book.shelf === "read"))}
      	shelf="read"
      	changeShelf={onChange}
      />
			<div className="open-search">
				<Link to='/search'>Add a book</Link>
			</div>
		</div>
	);
}

export default BookShelves
