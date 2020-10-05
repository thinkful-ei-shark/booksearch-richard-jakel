import React, { Component } from 'react';

class SearchFilter extends Component {
    render(){
        return (
            <div className="section--row search--filters">
                <label htmlFor="printType">Print Type:</label>
                <select name="printType" defaultValue="all" id="printType">
                    <option value="all" >All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="searchFilter">Book Type:</label>
                <select name="searchFilter" defaultValue="" id="searchFilter">
                    <option value="">No Filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="paid-ebooks">Paid eBooks</option>
                    <option value="ebooks">eBooks</option>
                </select>
            </div>
        )
    }
}

export default SearchFilter;