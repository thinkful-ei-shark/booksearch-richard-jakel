import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

class App extends Component {
  state = {
    search: "henry",
    books: [],
    url: "https://www.googleapis.com/books/v1/volumes"
  }
  fetchBooks = (data) => {
    const { searchterm, printType, searchFilter } = data;
    const filter = ( searchFilter !== '' ) ? `filter=${searchFilter}&` : '';
    const pt = ( printType !== '' ) ? `printType=${printType}&` : '';
    fetch( `${this.state.url}?q=${searchterm}&${filter}${pt}key=AIzaSyCXDiXJ3rTJyW24jRwe-4FoFVVIW1kv8oc`)
      .then( r => r.json())
      .then( r => this.handleBooksReturn(r.items) )
      .catch( e => console.log( `Error: ${e.message}` ) )
  }
  handleBooksReturn = (books) => {
    
    // add filter here

    this.setState({
      books: books
    })
  }
  componentDidMount(){
    const data = {
      searchterm: this.state.search,
      printType: 'all',
      searchFilter: ''
    }
    this.fetchBooks(data)
  }
  render(){
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar fetchBooks={this.fetchBooks}/>
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default App;