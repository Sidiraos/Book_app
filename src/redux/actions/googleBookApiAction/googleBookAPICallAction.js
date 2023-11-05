import { LOAD_BOOK , LOAD_BOOK_SUCCESS , LOAD_BOOK_FAILURE } from "../types";

export const load_book = ()=>{
    return {
        type : LOAD_BOOK
    }
}

export const load_book_success = (data)=>{
    return {
        type : LOAD_BOOK_SUCCESS ,
        payload : data
    }
}

export const load_book_failure = (errorMsg)=>{
    return {
        type : LOAD_BOOK_FAILURE,
        payload : errorMsg
    }
}

export const load_book_api = (searchValue)=>{
    // console.log(searchValue)
    return dispatch => {
        // is_pending
        dispatch(load_book());
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
        .then(response => response.json())
        .then(data => dispatch(load_book_success(data.items))) //success
        .catch(error => dispatch(load_book_failure(error.message))) //failure
    }
}