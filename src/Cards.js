import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import logo1 from "./assets/gamer1.jpg";
import logo2 from "./assets/gamer2.jpg";
import logo3 from "./assets/gamer3.jpg";
import logo4 from "./assets/gamer4.jpg";
import logo5 from "./assets/gamer5.jpg";

function Cards() {
  return (
    <div className='cards'>
      <h1>¡Creando EPICOS momentos en el trabajo y en el juego! </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={logo1}
              text='Recreando tu escritorio con los mejores modelos'
              label='Creatividad'
              path='/products'
            />
            <CardItem
              src={logo2}
              text='Computadoras Gamer echas para juegos populares'
              label='Rendimiento'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={logo3}
              text='Diseño de juegos en todas las plaaformas'
              label='Compatibilidad'
              path='/products'
            />
            <CardItem
              src={logo4}
              text='Diversidad de materiales para explotar tu maxima capacidad'
              label='Resistencia'
              path='/products'
            />
            <CardItem
             src={logo5}
              text='Ensamblaje de computadoras para lo EXTREMO'
              label='Poder'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
