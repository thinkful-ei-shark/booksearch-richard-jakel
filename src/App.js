import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchFilter from './components/SearchFilter';
import BookList from './components/BookList';

class App extends Component {
  state = {
    search: "",
    books: [],
    url: "https://www.googleapis.com/books/v1/volumes"
  }
  fetchBooks = (searchterm) => {
    fetch( `${this.state.url}?q=${searchterm}&key=AIzaSyCXDiXJ3rTJyW24jRwe-4FoFVVIW1kv8oc`)
      .then( r => r.json())
      .then( r => this.handleBooksReturn(r.items) )
      .catch( e => console.log( `Error: ${e.message}` ) )
  }
  handleBooksReturn = (books) => {
    this.setState({
      books: books
    })
  }
  componentDidMount(){
    this.fetchBooks("henry")
  }
  render(){
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar />
        <SearchFilter />
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default App;