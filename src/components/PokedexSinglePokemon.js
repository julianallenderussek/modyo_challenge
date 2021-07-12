import React, { useEffect, useState } from 'react'
import './Background.css'
import SinglePokemonScreen from '../screens/SinglePokemonScreen'
import { Link, useParams, useHistory } from 'react-router-dom'
import './Pokedex.css'
import { findRenderedComponentWithType } from 'react-dom/test-utils'

const PokedexSinglePokemon = () =>  {

    const [pokemonNameInput, setPokemonNameInput] = useState("")
    const history = useHistory()


    const handleChange = (event) => {
        event.preventDefault()
        const searchValue = event.target.value 
        setPokemonNameInput(searchValue)
    }

    const handleClick = async (pokemonName) => {
        console.log(pokemonName)
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        const response = await fetch(url)
        const data = await response.json()
        if (data.id) {
            history.push(`/pokemon/${data.id}`)
        }


    } 

    const params = useParams()
    const id = params.id
    const idInt = parseInt(id);
    
    let nextId
    if (idInt => 620) {
        nextId = idInt + 1
    } else {
        nextId = 0
    }

    let previousId
    if (idInt === 1) {
        previousId = 620
    } else {
        previousId = idInt -1
    }

    return (
        <div className="main-background-pokedex">
            <div className="sixty-container">
                <div className="information-wrapper">
                    <SinglePokemonScreen id={id} />
                </div>
            </div>
            <div className="forty-container">
                <div className="row-buttons-pokedex">
                    <Link to={`/pokemon/${previousId}`}>
                        <button 
                        // onClick={ () => setUrl(previousUrl)} 
                        className="previous-btn">Previous</button>
                    </Link >
                    
                    <Link to={`/pokemon/${nextId}`}>
                        <button 
                        // onClick={() => setUrl(nextUrl)} 
                        className="next-btn">Next
                        </button>
                    </Link>
                    
                    
                </div>
                <div className="row-buttons-pokedex">
                    <Link to="/pokedex">
                        <button className="pokemon-list-btn">Pókemon List</button>
                    </Link>
                    <Link to="/">
                        <button className="turn-off-btn">Turn Off</button>
                    </Link>
                </div>
                <div className="row-buttons-pokedex">
                    <input  className="pokemon-searchbar" onChange={handleChange} placeholder="search pokemon by name or id number"></input>
                    <button className="pokemon-search-button" onClick={() => handleClick(pokemonNameInput)}>Search</button>
                </div>

            </div>
        </div>
    )
}

export default PokedexSinglePokemon