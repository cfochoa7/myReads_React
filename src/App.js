import React from 'react';
import {Route} from 'react-router-dom';
import {Search} from './components/search.js';
import {Main} from './components/main.js';
import './App.css';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={()=> (
        <Main
        current = 'currentlyReading'
        want = 'wantToRead'
        read = 'read'
        />
      )} />

      <Route exact path='/add' render={()=> (
        <Search />
      )} />
      </div>
    )
  }
}

export default BooksApp
