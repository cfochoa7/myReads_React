import React from 'react';
import {Book} from './book.js';

export class Shelf extends React.Component {
render() {
  let current;
  if(this.props.book){
    current = this.props.book
    .filter(book => book.shelf === 'currentlyReading')
    .map(book => {
      console.log(current);
      return(
    <li key={book.id}>
      <Book
      book={book}
      moveShelf={this.props.moveShelf}
      current={this.props.current}
       />
    </li>
  );
});
}
  return(
    <div>
      {current}
    </div>
  )
 }
}

export default Shelf;
