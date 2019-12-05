import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks, selectedBookDetails } from '../actions'
import BookLists from './BookLists';

class BaseComponent extends React.Component{
    render(){
        const { items = [], addSelectedBookDetails } = this.props;
        return(
            <div>
            { !items.length && <div className="book-store">
                <h1>Welcome to the Book Store</h1>
                    <button className="booksDetailBtn" type="button" onClick={this.props.getAllBooks}>Fetch All Books</button>
                </div>
            }
                {!!items.length && <BookLists items ={this.props.items} addSelectedBookDetails={addSelectedBookDetails} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: (state.data && state.data.items) || []
    }
}

const mapDispatchToProps = (dispatch, { history }) => {
    const addSelectedBookDetails = async (data) => {
        if (window.localStorage) {
            window.localStorage.setItem('bookDetails', JSON.stringify(data));
        }
       await dispatch(selectedBookDetails(data));
       history.push('/detail');
    }

    const getAllBooks = () => {
        dispatch(fetchBooks());  
    }

    return {
        getAllBooks,
        addSelectedBookDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent);