import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookCard from './BookCard'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    books: [],
    query: ''
  }

  handleChange = (e) => {
    let value = e.target.value
    this.setState(() => {
      return {query: value}
    })
    this.searchBooks(value)
  }

  setShelf = (books) => {
    let myBooks = this.props.books
    books.forEach(book => {
      myBooks.forEach(myBook => {
        myBook.id === book.id ? book.shelf = myBook.shelf : book.shelf = 'none';
      })
    });
    return books
  }

  addBookToShelf = (book, shelf) => {
    this.props.onChange(book, shelf)
  }

  searchBooks = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query).then((books) => {
        if (books.length > 0) {
          books = books.filter((book) => (book.imageLinks))
          books = this.setShelf(books)
          this.setState(() => {
            return { books }
          })
        }
      })
    } else {
      this.setState({books: [], query: ''})
    }
  }

  render() {
    const { books, query } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {query.length > 0 && books.map((book, index) => (
              <BookCard
                key={index}
                book={book}
                onChange={(shelf) => {this.addBookToShelf(book, shelf)}}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
