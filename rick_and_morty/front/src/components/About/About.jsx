import style from "./About.module.css";
import React from "react";


const About = () => {
    return (
        <div className={style.mainContainer}>
        <div className={style.imageContainer}></div>

        <div className={style.textContainer}>
            <h1 className={style.title}>ACERCA DE LA APP</h1>
            <span>
                Hola! Mi nombre es Andrés Felipe Rojas Pérez soy estudiante de desarrollo web Full Stack
                en HENRY, desarrollé esta App con los conocimientos adquiridos en el bootcamp, su desarrollo
                fue hecho utilizando tecnologías como: React, Redux, NodeJS, Sequelize, Postgresql, entre otros.
                En esta App podras interactuar con todos los personajes de la serie Rick and Morty, obtener
                información acerca de ellos, al igual que podras escoger tus favoritos y sumergirte
                en todo un universo de diversión.
            
            </span>
        </div>
        </div>
    );
};

export default About;