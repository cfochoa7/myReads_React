import React from 'react';

export class Book extends React.Component {

/*Defines 'this.props' to the variable 'connect'.*/
  render() {
    let connect;
      connect = this.props;

/*The 'style' variable structures the appearance of the book. The width and the height are established.
The backgroundImage will have the url use a tenerary operator that will reach into the {book} in the
main.js. It will use the thumbnail of the selected book and display it to the user.*/
    let style;
    style = {
      width: 150,
      height: 200,
      backgroundImage: `url("${connect.book.imageLinks ? connect.book.imageLinks.thumbnail : null}")`
    }

/*The 'change' variable gives the ability to move the selected books to different sections of the main page.
 https://www.youtube.com/watch?v=i6L2jLHV9j8&t=4982s
*/
    let change;
      change = (e) => connect.moveShelf(
       connect.book, e.target.value
     )

    return(
      <div className="book">
        <div className="book-top">

          <div className="book-cover"
                   style={style}>
          </div>

          <div className="book-shelf-changer">

            <select
             onChange = {change}

             /*Has the selected value on default based on where the section of the book is located.*/
             value={connect.current}
            >

              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>

          </div>
        </div>

        <div className="book-title">{connect.book.title}</div>
        <div className="book-authors">{connect.book.authors}</div>

      </div>
    );
  }
}

export default Book;
