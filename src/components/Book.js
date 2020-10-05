import React, { Component } from 'react';

class Book extends Component{
    render(){
        const { title, author, price, description, picture } = this.props;
        return (
            <li>
                <h3>{title}</h3>
                <div className="section--row">
                    <img alt="" src={picture} />
                    <div className="section--column">
                        <p>Author: {author}</p>
                        <p>Price: {price}</p>
                        <br />
                        <p>{description}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Book;