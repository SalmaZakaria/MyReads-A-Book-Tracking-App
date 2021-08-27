import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookStatus extends Component {
    static propTypes = {
        Books: PropTypes.array.isRequired,
        ChangingStatus: PropTypes.func.isRequired,
    }
    render() {
        const { Books, title, ChangingStatus } = this.props;
        return ( <
            div >
            <
            div className = "bookshelf" >
            <
            h2 className = "bookshelf-title" > { this.props.title } < /h2> <
            div className = "bookshelf-books" >
            <
            ol className = "books-grid" > {
                Books.map((book) =>
                    <
                    li key = { book.id } >
                    <
                    div className = "book" >
                    <
                    div className = "book-top" >
                    <
                    div className = "book-cover"
                    style = {
                        { width: 120, height: 180, backgroundImage: `url(${book.imageLinks.thumbnail})` } } > < /div> <
                    div className = "book-shelf-changer" >
                    <
                    select onChange = { event => ChangingStatus(book, event.target.value) }
                    value = { book.shelf } >
                    <
                    option value = "move"
                    disabled > Move to... < /option> <
                    option value = "currentlyReading" > Currently Reading < /option> <
                    option value = "wantToRead" > Want to Read < /option> <
                    option value = "read" > Read < /option> <
                    option value = "none" > None < /option> <
                    /select> <
                    /div> <
                    /div> <
                    div className = "book-title" > { book.title } < /div> <
                    div className = "book-authors" > { book.authors } < /div> <
                    /div> <
                    /li>                             
                )
            } <
            /ol> <
            /div> <
            /div> <
            /div>
        );
    }
}

export default BookStatus;