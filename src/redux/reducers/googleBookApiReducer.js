import { LOAD_BOOK , LOAD_BOOK_SUCCESS , LOAD_BOOK_FAILURE } from "../actions/types";

const initialStateGoogleAPI = {
    data : [] ,
    loading : false ,
    error : ""
}

const googleBookApiReducer = (state = initialStateGoogleAPI , action)=>{
    switch (action.type) {
        case LOAD_BOOK:
            return {
                ...state,
                loading : true
            }
        case LOAD_BOOK_SUCCESS:
            return {
                ...state,
                data : action.payload ,
                loading : false ,
                error : ""
            }
        case LOAD_BOOK_FAILURE:
            return {
                ...state,
                error : action.payload ,
                loading : false
            }
        default:
            return state
        }
}

export default googleBookApiReducer;