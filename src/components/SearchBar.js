import React, { Component } from 'react';
import SearchFilter from './SearchFilter';

class SearchBar extends Component{

    handleFormSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const searchterm = form.get("searchterm");
        this.props.fetchBooks(searchterm);
    }

    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="searchterm">Search:</label>
                <input 
                    type="text" 
                    name="searchterm" 
                    id="searchterm" 
                    placeholder="henry" 
                    required
                />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar;