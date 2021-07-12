import React from 'react'
import { Link } from 'react-router-dom';
import PokemonLogo from '../assets/pokemonlogo.png'
import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className="background-homescreen">
      <h1 className="homescreen-title">Welcome to the PokeDex App</h1>
      <img className="pokemon-logo" src={PokemonLogo}></img>

      <Link to="/pokedex">
        <button className="big-start-button">Start</button>
      </Link>
    </div>
  )
}

export default HomeScreen
