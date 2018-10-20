import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import {Book} from './book.js';

export class Search extends React.Component {
/*Sets up the constructor with the state. An array of 'listedBooks' is used to store the displayed books.*/
  constructor(props){
    super(props);
    this.state = {
      listedBooks: []
    }
  }

/*Updates the BooksApp and transfers the selected book to the main page.*/
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
  }

/* Find if the seach bar is empty then the listedBooks array reply in kind.
As well if 'getBooks' is called then the BooksApp will search and then display the requested books in the 'listedBooks' array.
An error message will display if no book is found. Otherwise the 'listedBooks' array will continue to display the requested items.*/
  updateSearch = (search) => {
    search === '' ? this.setState({ listedBooks: [] }):
    this.getBooks(search ? BooksAPI.search(search).then((listedBooks) => {
      listedBooks.error ? this.setState(alert('No Books Listed, please restart search.')) : this.setState({listedBooks})
    })
       : null
    );
  }

  getBooks = (search) => {
    console.log(search)
  }

  render() {

/*The variable 'updateSearch' is used to target the value of the book in the 'updateSearch' function.
The variable will be injected in the '<input />'.*/
    let updateSearch;
    updateSearch = (e) => this.updateSearch(e.target.value)

/*Uses the variable 'bookList' to represent the state and 'listedBooks'.
The .map() is used with the '<li />' & '<Book />' from book.js.
The key functions on order to id everything in the 'listedBooks' array.
'moveShelf' is used to look into the array of books and display the books to the user.
'{listedBooks}' is injected to display the book to the user'. */
    let bookList;
    if (this.state.listedBooks) {
     bookList = this.state.listedBooks
    .map(listedBooks => (
      <li
        key = {listedBooks.id}>
      <Book
        book = {listedBooks}
        moveShelf={this.moveShelf}
        />
      </li>
    ))
  }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"
                className="close-search"
          >
          </Link>

          <div className="search-books-input-wrapper">

            <input className="search-books"
                   type="text"
                   placeholder="Search by Title or Author"
                   onChange={updateSearch}
                   />
          </div>
        </div>

        <div className="search-books-results">

          <ol className="books-grid">

            {bookList}

          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
