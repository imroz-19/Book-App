import axios from 'axios';  

export const fetchBooks = () => async dispatch => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a')
    const data = response.data;
    dispatch({
        type: 'FETCH_POST',
        payload: data
    })
}

export const selectedBookDetails = (payload) => {
    return {
        type: 'GET_BOOK_DETAILS',
        payload
    }
}