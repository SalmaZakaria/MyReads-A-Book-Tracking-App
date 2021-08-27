import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    static propTypes = {
        Books: PropTypes.array.isRequired,
        ChangingStatus: PropTypes.func.isRequired
    }
    state = {
        Query: '',
        Queries: []
    }
    UpdateQuery = (query) => {
        this.setState(() => ({
            Query: query
        }))
    }
    ClearQuery = (Query) => {
        this.UpdateQuery('');
    }
    BooksToShow = (B) => {
        this.setState(() => ({
            Queries: B
        }))
    }
    DispalyBooks = Query => {
        this.BooksToShow([])
        this.UpdateQuery(Query)
        if (Query.trim().length > 0) {
            BooksAPI.search(Query).then((NewValue) => {
                this.BooksToShow(NewValue)
            })
        } else {
            this.BooksToShow([])
        }
    }
    ImageFound = (book) => {
        if (book.imageLinks === undefined) {
            return false;
        } else {
            return true;
        }
    }
    QueryFound = () => {
        if (this.state.Queries.length > 0 && this.state.query.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        const { Query, Queries } = this.state;
        const { Books, ChangingStatus } = this.props;
        return ( <
            div className = "search-books" >
            <
            div className = "search-books-bar" >
            <
            div className = "search-books-input-wrapper" >
            <
            input type = "text"
            placeholder = "Search by title or author"
            value = { Query }
            onChange = {
                (event) => this.DispalyBooks(event.target.value) }
            /> <
            /div> <
            /div> <
            Link to = '/'
            className = "close-search" >
            Return Back <
            /Link> <
            div className = "search-books-results" >

            <
            ol className = "books-grid" > {
                Queries.length > 0 && Query.length > 0 &&
                Queries.map(book => ( <
                    li key = { book.id } >
                    <
                    div className = "book" >
                    <
                    div className = "book-top" > {
                        this.ImageFound(book) === true ? < div className = "book-cover"
                        style = {
                            { width: 120, height: 180, backgroundImage: `url(${book.imageLinks.thumbnail})` } } > < /div> :  <
                        div className = "book-cover"
                        style = {
                            { width: 120, height: 180, backgroundColor: 'grey' } } > < /div>

                    } <
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
                ))
            } <
            /ol> { <
                h2 style = {
                    { textAlign: 'center' } } > No Books have been Found < /h2>
            } <
            /div> <
            /div>
        );
    }
}

export default Search;