import React from 'react';
import * as BooksAPI from './BooksAPI';
import {Route} from 'react-router-dom';
import {Search} from './components/search.js';
import {Main} from './components/main.js';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }



  render() {
    return (
      <div className="app">
      <Route exact path='/' render={()=> (
        <Main/>
      )} />

      <Route exact path='/add' render={()=> (
        <Search />
      )} />
      </div>
    )
  }
}

export default BooksApp
