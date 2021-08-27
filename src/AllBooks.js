import React, { Component } from 'react'
import BookStatus from './BookStatus'
import PropTypes from 'prop-types'


class AllBooks extends Component {
    static propTypes = {
        Books: PropTypes.array.isRequired,
        ChangingStatus: PropTypes.func.isRequired,
    }

    render() {
        var { Books, ChangingStatus } = this.props
        const currentlyReading = Books.filter(b => b.shelf === "currentlyReading");
        const WantToRead = Books.filter(b => b.shelf === "wantToRead");
        const Read = Books.filter(b => b.shelf === "read");
        return ( <
            div className = "list-books-content" >
            <
            BookStatus Books = { currentlyReading }
            title = { "currentlyReading" }
            ChangingStatus = { this.ChangingStatus }
            /> <
            BookStatus Books = { WantToRead }
            title = { "wantToRead" }
            ChangingStatus = { this.ChangingStatus }
            /> <
            BookStatus Books = { Read }
            title = { "read" }
            ChangingStatus = { this.ChangingStatus }
            />  <
            /div>
        );
    }
}

export default AllBooks;