import { ADD_BOOK  , REMOVE_BOOK , REMOVE_ALL} from "../actions/types";

const initialState = {
    books : JSON.parse(localStorage.getItem("booksData")) || []
}

const bookReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD_BOOK:
            state = {
                ...state,
                books : [...state.books , action.payload],
            }
            localStorage.setItem("booksData" , JSON.stringify([...state.books]))
            return state;

        case REMOVE_BOOK:
                state = {
                    ...state,
                    books : state.books.filter(book => book.id !== action.payload)
                }
                localStorage.setItem("booksData" , JSON.stringify([...state.books]))
                return state

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