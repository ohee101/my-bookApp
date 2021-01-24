import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    books: [],
    favorites: [],

}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_BOOKS:
            return {
                ...state,
                books: action.payload,
            }
        case actionTypes.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.concat(action.payload),
            }
        case actionTypes.REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload.id)
            }

        default:
            return state;
    }
}
