import React from 'react';
import {Link} from 'react-router-dom';
import {Shelf} from './shelf.js';

export class Main extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    books:{}
  }
}



  render() {
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

                <Shelf
                book = {this.props.book}
                moveShelf={this.props.moveShelf}

                current = 'currentlyReading'
                />

                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                <Shelf
                book = {this.props.book}
                moveShelf={this.props.moveShelf}

                current = 'wantToRead'
                />


                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                <Shelf
                book = {this.props.book}
                moveShelf={this.props.moveShelf}

                current = 'read'
                />


                </ol>
              </div>
            </div>

          </div>
        </div>
        <div className="open-search">
          <Link to="/add" className='/add-book' onClick={() => this.setState({ showSearchPage: false })}>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Main;
