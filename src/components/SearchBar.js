import React, { Component } from 'react';
import SearchFilter from './SearchFilter';

class SearchBar extends Component{

    handleFormSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
            searchterm: form.get("searchterm"),
            printType: form.get("printType"),
            searchFilter: form.get("searchFilter")
        }
        this.props.fetchBooks(data);
    }

    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="section--row">
                    <label htmlFor="searchterm">Search:</label>
                    <input 
                        type="text" 
                        name="searchterm" 
                        id="searchterm" 
                        placeholder="henry" 
                        required
                    />
                    <button type="submit">Search</button>
                </div>
                <div className="section--row">
                    <SearchFilter />
                </div>
            </form>
        )
    }
}

export default SearchBar;