import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';
import BookList from './BookList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar />
        <SearchFilter />
        <BookList />
      </div>
    );
  }
}

export default App;