import { ADD_BOOK , REMOVE_BOOK , REMOVE_ALL } from "../types";

export const add_book = (book)=>{
    return {
        type : ADD_BOOK ,
        payload : book
    }
}

export const remove_book = (id)=>{
    return {
        type : REMOVE_BOOK ,
        payload : id
    }
}

export const remove_all = ()=> {
    return {
        type : REMOVE_ALL
    }
}

