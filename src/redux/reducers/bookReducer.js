import { ADD_BOOK  , REMOVE_BOOK , REMOVE_ALL} from "../actions/types";

const initialState = {
    books : JSON.parse(localStorage.getItem("booksData")) ? JSON.parse(localStorage.getItem("booksData")) : []
}

const bookReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD_BOOK:
            state = {
                ...state,
                books : [...state.books , action.payload].reverse(),
            }
            console.log('bookState',state)
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
                state = {
                    ...state,
                    books : []
                }

                localStorage.setItem("booksData" , JSON.stringify(state.books));
                return state;

        default:
            return state
    }
}

export default bookReducer;