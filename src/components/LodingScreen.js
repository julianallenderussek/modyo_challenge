import React from 'react'
import PokemonLogo from '../assets/pokemonlogo.png'
import './LoadingScreen.css'

const LoadingScreen = () => {
    return (
        <div className="loadingscreen-wrapper">
            <img className="loadingscreen-logo" src={PokemonLogo}></img>
            <h1>...Loading...</h1>
        </div>
    )
}

export default LoadingScreen
