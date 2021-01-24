import * as actionTypes from './actionTypes';
import axios from 'axios';


export const loadBooks = books => {
    return {
        type: actionTypes.LOAD_BOOKS,
        payload: books,
    }
}

export const getBooks = () => (dispatch, getState) => {
    let token = getState().token;
    axios.get("https://book-app-5dd87-default-rtdb.firebaseio.com/books.json")
        .then(response => dispatch(loadBooks(response.data)))
        .catch(err => console.log(err))
}

export const addToFavorites = book => {
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        payload: book,
    }
}

export const removeFavorite = book => {
    return {
        type: actionTypes.REMOVE_FAVORITE,
        payload: book,
    }
}

