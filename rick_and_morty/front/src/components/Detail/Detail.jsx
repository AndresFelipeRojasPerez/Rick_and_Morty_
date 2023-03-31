import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const {detailId} = useParams();

    const [character, setCharacter] = useState ({})

    useEffect(() => {
        const URL_BASE = "http://localhost:3001";
        // const KEY = "8e2a27fa2bac.a435f2ada59bba4ec749"

        axios (`${URL_BASE}/detail/${detailId}`).then ((response) => 
        setCharacter(response.data)
        );
      }, []);


   return (
<div>
    {character.name ? (
        <>
    <h2>{character.name}</h2>
    <p>Status: {character.status}</p>
    <p>Species: {character.species}</p>
    <p>Gender: {character.gender}</p>
    <p>Origin: {character.origin?.name}</p>
    <img src= {character.image} alt="img"/>
    </>
    ) : (
        <h3>Loading...</h3>
    )}

</div>
    );
};

export default Detail;