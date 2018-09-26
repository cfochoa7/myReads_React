import React from 'react';
import {Link} from 'react-router-dom';


export class Search extends React.Component {

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by Title or Author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default Search;
