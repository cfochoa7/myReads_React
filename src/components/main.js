import React from 'react';
import {Link} from 'react-router-dom';
import {Book} from './book.js';
import * as BooksAPI from '../BooksAPI';

export class Main extends React.Component {

/*Sets up the constructor with the state. An array of 'books' is used to store the displayed books.*/
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

/*The componentDidMount() is called giving API requests*/
  componentDidMount() {
    this.getBooks()
  }

/*The getBooks function is created in order to give API requests and then updating the 'books' array.*/
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

/*The moveShelf allows the book to move from different sections in the main page.*/
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.getBooks()
    })
  }

  render() {
    const bookFinder = this.state.books
    const title = this.props

/*Each variable is defined by the sections of the page.
An If method is used access the state.
The filter method filters the array to display the appropriate amount of book in the section.
A map method is also used to display a seperate array books in each section.
The 'moveShelf' allows the books to shift from each section.
The 'current' is used to display the dropdown section based on where the book is located. */
  let currentlyReading;
  if (bookFinder) {
    currentlyReading = bookFinder
    .filter(book => book.shelf === title.current)
    .map((book =>
    <li key={book.id}>
      <Book
      book={book}
      moveShelf={this.moveShelf}
      current={title.current}
       />
    </li>
  ))
}

  let want;
    if (bookFinder) {
    want = bookFinder
    .filter(book => book.shelf === title.want)
    .map((book =>
    <li key={book.id}>
      <Book
      book={book}
      moveShelf={this.moveShelf}
      current={title.want}
       />
    </li>
  ))
}

  let read;
  if (bookFinder) {
    read = bookFinder
    .filter(book => book.shelf === title.read)
    .map((book =>
      <li key={book.id}>
      <Book
      book={book}
      moveShelf={this.moveShelf}
      current={title.read}
        />
     </li>
   ))
 }


    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                {currentlyReading}

                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                {want}

                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                {read}

                </ol>
              </div>
            </div>

          </div>
        </div>
        <div className="open-search">
          <Link to="/add" className='/add-book'>Add a book</Link>
        </div>
      </div>


    );
  }
}

export default Main;
