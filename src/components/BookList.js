import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component{
    getBooks = () => {
        if (typeof this.props.books !== "object") return;
        return this.props.books.map( (book,idx) => {
            const price = (book.saleInfo.saleability === "FOR_SALE") ? book.saleInfo.listPrice.amount : 0;
            const authors = ( typeof book.volumeInfo.authors === "object" ) ? book.volumeInfo.authors.join(", ") : "None Listed" ;
            return (
                <Book 
                    key={idx}
                    title={book.volumeInfo.title}
                    author={authors}
                    price={price}
                    description={book.volumeInfo.description}
                    picture={book.volumeInfo.imageLinks.thumbnail}
                    saleability={book.saleInfo.saleability}
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