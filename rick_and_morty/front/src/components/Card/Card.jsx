import React from "react";
import style from "./Card.module.css";
import axios from "axios"
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite, getFavorites } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


function Card({
   id,
   name,
   species,
   gender,
   image,
   onClose,
   myFavorites,
}) {
   
const [isFav, setIsFav] = useState (false);

const dispatch = useDispatch();


const addFavorite = async (character) =>{
   await axios.post("http://localhost:3001/rickandmorty/fav", character)
   .then((res) => console.log("ok"));
   dispatch(getFavorites());

};



const deleteFavorite = async (id) => {
   await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
   dispatch(getFavorites());
   alert("Eliminado con exito")
}


const handleFavorite = () => {
if (isFav) {
   setIsFav(false);
   deleteFavorite(id)
}else {
   setIsFav(true);
   addFavorite({
      id, 
      name, 
      species, 
      gender, 
      image, 
   })

}};

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className= {style.container}>

        {isFav ? (
      <button className= {style.boton.fav1} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className= {style.boton.fav2} onClick={handleFavorite}>🤍</button>
   )}

         <button className= {style.boton} onClick={() => onClose(id)}>X</button>
         <img className= {style.image}  src={image}/>
        <Link to= {`/detail/${id}`}>
         <h2>Name: {name}</h2>
         </Link>
         <h2>Species: {species}</h2>
         <h2>Gender:{gender}</h2>
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      },
   };
};

const mapStateToProps = (state) => {
   return{
   myFavorites:state.myFavorites
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);