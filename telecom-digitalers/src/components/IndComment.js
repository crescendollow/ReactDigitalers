import React from "react";
import "../App.css";
import Ruta from "../public/Images/Avatar.jpg" 


const IndNews = (props) => {
    return (
        <article className="comentario col-5 noticia m-2 p-0 rounded shadow mb-5 bg-body-tertiary rounded text-center">
            <img src={Ruta} alt="User" width="60px"/>
            <h3>Nombre: {props.nombre}</h3>
            <h4>Rol: {props.rol}</h4>
            <h5>Experiencia Personal: {props.comentario}</h5>
        </article>
    );
};

export default IndNews;
