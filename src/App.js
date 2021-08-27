import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import AllBooks from './AllBooks'
import Search from './Search'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
    state = {
        Books: [],
    }
    componentDidMount() {
        BooksAPI.getAll()
            .then((Books) => {
                this.setState(() => ({
                    Books
                }))
            })
    }
    UpdatingShelf = (book, status) => {
        BooksAPI.update(book, status).then((NewState) => {
            book.shelf = status;
            this.setState((OldState) => ({
                Books: OldState.Books.filter((b) => {
                    return b.id !== book.id
                }).concat([book])
            }))

        })
    }
    render() {
        return ( <
            div className = "app" >
            <
            div >
            <
            Route exact path = '/'
            render = {
                () => ( <
                    div className = "list-books" >
                    <
                    div className = "list-books-title" >
                    <
                    h1 > MyReads < /h1> <
                    /div> <
                    AllBooks Books = { this.state.Books }
                    ChangingStatus = { this.UpdatingShelf }
                    /> <
                    /div>
                )
            }
            /> <
            /div>

            <
            div className = "open-search" >
            <
            Link to = "/search" >
            <
            button > Show Books < /button> <
            /Link> <
            /div>

            <
            Route path = '/search'
            render = {
                ({ history }) => ( <
                    Search Books = { this.state.Books }
                    ChangingStatus = { this.UpdatingShelf }
                    />
                )
            }
            /> <
            /div>
        )
    }
}

export default BooksApp