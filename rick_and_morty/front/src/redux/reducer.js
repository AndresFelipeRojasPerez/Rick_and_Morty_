import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER, GET_FAVORITES } from "./actions";

const initialState = {
    myFavorites : [],
    allCharacters : [],
};

const rootReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return {...state, 
                    myFavorites: [...state.allCharacters, action.payload],
                    allCharacters: [...state.allCharacters, action.payload]
                };

            case DELETE_FAVORITE:
            return {...state, 
                    myFavorites: state.myFavorites.filter ((char) =>
                    char.id !== action.payload), };

            
            case FILTER:
            return {...state,
                     myFavorites: state.allCharacters.filter ((char) => 
                     char.gender === action.paylod),};

            
                     
                     
            case ORDER:
                         return {...state, 
                            myFavorites: state.allCharacters.sort ((x,y) => {
                                if (action.paylod == "Ascendente") {x.id - y.id}
                                else(action.paylod == "Descendente"); {y.id - x.id}
                            })}
                            
            case GET_FAVORITES: 
                    return {...state, myFavorites: action.payload}
                            
            default: 
            return {...state};
    }
};

export default rootReducer;