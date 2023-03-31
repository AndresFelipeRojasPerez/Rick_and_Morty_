import Card from '../Card/Card';
import style from "./Cards.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux/actions';
import { useEffect } from 'react';


export default function Cards(props) {
   const { characters, onClose } = props;
   const dispatch = useDispatch();
   const favorites = useSelector((state) => state.myFavorites); 
   
//    useEffect(() => {
//        dispatch(getFavorites());
//   }, []);
   
   return (<div className= {style.container}>
      
      {characters.map(({id, name,species,gender,image}) => {
      return <Card
      key= {id}
      id = {id}
      name = {name}
      species={species}
      gender={gender}
      image={image}
      onClose= {onClose} />
      })}
   </div>)
}
