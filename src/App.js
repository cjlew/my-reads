import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelves from './BookShelves';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  };

  componentDidMount() {
    this.fetchBooks()
  };

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks()
    })
  }

  render () {
      const { books } = this.state;
      return (
        <div className="full-app">
          {window.location.pathname !== '/search' ? <Header /> : null}
          <Route
            exact path="/"
            render={() => (
              <BookShelves
                books={books}
                onChange={this.updateBooks}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchPage
                books={books}
                onChange={this.updateBooks}
              />
            )}
          />
          {window.location.pathname !== '/search' ? <Footer /> : null}
        </div>
      );
    }
}

export default BooksApp;
