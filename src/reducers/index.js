const initialState = { selectedBookDetails : {} }

export default (state = initialState, action) => {
    const {type , payload } = action;
    switch (type) {
        case 'FETCH_POST':
            return {
                ...state,
                data: payload
            }
        case 'GET_BOOK_DETAILS':
            return {
                ...state,
                selectedBookDetails: payload
            }    
        default:
            return state;
    }
}