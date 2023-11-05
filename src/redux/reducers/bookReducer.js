import { ADD_BOOK  , REMOVE_BOOK , REMOVE_ALL} from "../actions/types";

const initialState = {
    books : JSON.parse(localStorage.getItem("booksData")) || []
}

const bookReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books : [...state.books , action.payload]
            }
            case REMOVE_BOOK:

                return {
                    ...state,
                    books :  state.books.filter(book => book.id !== action.payload)
                }
            case REMOVE_ALL :
                return {
                    ...state,
                    books : []
                };
        default:
            return state
    }
}

export default bookReducer;