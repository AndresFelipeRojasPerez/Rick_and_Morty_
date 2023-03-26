import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../Card/Card"
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = ({myFavorites}) => {

    const  dispatch = useDispatch();


    const handleChangeOrder = (event) => {
    
      const evento = event.target.value;  
        dispatch(orderCards(evento))
    };

    const handleChangeFilter = (event) => {
        
        const evento = event.target.value;
        dispatch(filterCards(evento))
    }

        

    return (
        
        <>
        <div>
            <select onChange={handleChangeOrder}  name="ordenamiento">
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            </select>
        </div>

        <div>
            <select onChange={handleChangeFilter} name="filtrado">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>
        </div>


        {myFavorites.map(({id, name,species,gender,image}) => {
            return (
            <Card
             key = {id}
             id = {id}
             name = {name}
             species={species}
             gender={gender}
             image={image}
       />
    );
})}      
</>
);
};

const mapStateToProps = (state) => {
    return{
    myFavorites:state.myFavorites
    };
 };

export default connect (mapStateToProps, null) (Favorites);

