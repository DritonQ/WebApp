import React from 'react';
import style from './recipe.module.css';

const Receipe = ({title, calories, image, ingredients }) => {
    return (
        <div className={style.receipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Receipe;