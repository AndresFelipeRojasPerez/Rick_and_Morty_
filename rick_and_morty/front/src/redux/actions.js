import axios from "axios";

export  const ADD_FAVORITE = "ADD_FAVORITE";
export  const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ORDER = "ORDER"
export const FILTER = "FILTER"
export const GET_FAVORITES = "GET_FAVORITES";


export const deleteFavorite = (id) => {
    return {type: DELETE_FAVORITE, payload: id}
};

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
};

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
};

export const getFavorites = () => {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
        dispatch({type: GET_FAVORITES, payload: response.data})
    };
}; 