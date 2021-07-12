import React, { useEffect, useState } from 'react'
import './Background.css'
import { Link, useHistory } from 'react-router-dom'
import './Pokedex.css'
import PokedexScreen from '../screens/PokedexScreen'
 

const PokedexList = () =>  {

    const [previousUrl, setPreviousUrl] = useState("")
    const [nextUrl, setNextUrl] = useState("")
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
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
        console.log(data.id);
        if (data.id) {
            history.push(`/pokemon/${data.id}`)
        }


    } 


    return (
        <div className="main-background-pokedex">
            <div className="sixty-container">
                <div className="information-wrapper">
                    <PokedexScreen url={url} setNextUrl={setNextUrl} setPreviousUrl={setPreviousUrl}/>
                </div>
            </div>
            <div className="forty-container">
                <div className="row-buttons-pokedex">
                    <Link>
                        <button onClick={ () => setUrl(previousUrl)} className="previous-btn">Previous</button>
                    </Link>
                    
                        <button onClick={() => setUrl(nextUrl)} className="next-btn">Next</button>
                    
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
                <div className="row-buttons-pokedex">
                    <input  className="pokemon-searchbar" onChange={handleChange} placeholder="search pokemon by name or id number"></input>
                    <button className="pokemon-search-button" onClick={() => handleClick(pokemonNameInput)}>Search</button>
                </div>
                </div>

            </div>
        </div>
    )
}

export default PokedexList
