import React, { Component } from 'react';
import dummybooks from '../dummybooks.js';
import Book from './Book';

class BookList extends Component{
    getBooks = () => {
        if (typeof this.props.books !== "object") return;
        return this.props.books.map( (book,idx) => {
            const price = (book.saleInfo.saleability === "FOR_SALE") ? book.saleInfo.listPrice.amount : 0;
            return (
                <Book 
                    key={idx}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors.join(", ")}
                    price={price}
                    description={book.volumeInfo.description}
                    picture={book.volumeInfo.imageLinks.thumbnail}
                />
            )
        } )
    }
    render(){
        return (
            <ul>
                {this.getBooks()}
            </ul>
        )
    }
}

export default BookList;