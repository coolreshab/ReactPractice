import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Book(props) {
    return (
        <article className='book'>
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <h4> {'Rs ' + props.price}</h4>
        </article>
    )
}

function BookFeed(props) {
    if (props.books) {
        return (
            <section className='bookFeed'>
                {
                    props.books.map((book, index) => {
                        return <Book key={index} {...book} />
                    })
                }
            </section>
        )
    }
    return (
        <>
            <h4>No book provided to the feed</h4>
        </>
    )
}

const books = [
    {
        image: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL906_SR906,600_.jpg',
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        price: 269.00
    },
    {
        image: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL906_SR906,600_.jpg',
        title: 'Atomic Habits: The life-changing million copy bestseller',
        author: 'James Clear',
        price: 482.00
    },
    {
        image: 'https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL906_SR906,600_.jpg',
        title: 'DO EPIC SHIT',
        author: 'Ankur Warikoo',
        price: 359.00
    },
    {
        image: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL906_SR906,600_.jpg',
        title: 'Ikigai: The Japanese secret to a long and happy life',
        author: 'Héctor García',
        price: 313.00
    },
    {
        image: 'https://images-eu.ssl-images-amazon.com/images/I/818e+fq7+BL._AC_UL906_SR906,600_.jpg',
        title: 'Word Power Made Easy',
        author: 'Norman Lewis',
        price: 92.00
    },
    {
        image: 'https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL906_SR906,600_.jpg',
        title: 'My First Library: Boxset of 10 Board Books for Kids',
        author: 'Wonder House Books',
        price: 349.00
    }
];

ReactDom.render(<BookFeed books={books} />, document.getElementById('root'));