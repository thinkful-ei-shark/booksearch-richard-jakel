import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Book extends Component{
    state = {
        visible: false
    }
    render(){
        const { title, author, price, description, picture, saleability } = this.props;
        const p = (saleability !== "FOR_SALE") ? "Not Available" : USCurrencyFormat.format(price);
        const c = (this.state.visible) ? "book--visible" : "";
        return (
            <li 
                className={c}
                onClick={()=>{
                    this.setState({
                        visible: !this.state.visible
                    })
                }}
            >
                <h3>{title}</h3>
                <div className="section--row">
                    <img alt="" src={picture} />
                    <div className="section--column book--details">
                        <p>Author: {author}</p>
                        <p>Price: {p}</p>
                        <br />
                        <p>{description}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Book;