import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Pokemon.css"

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState();
  const [abilities, setAbilities] = useState();
  const [pokemonId, setPokemonId] = useState()

  const fetchPokemon = async () => {
    const url = props.url
    const response = await fetch(url)
    const data = await response.json()
    setPokemon(data)
    setTypes(data.types)
    setAbilities(data.abilities)
    setPokemonId(data.id)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchPokemon()
  }, [])

  return (
    <>
      { loading ? <div className="loading-pokemon-row">...Loading Pokemon...</div> : 
      
      <Link className="link-pokemon" to={`/pokemon/${pokemonId}`}>
      <div className="pokemon-wrapper">
          <img className="small-pókemon-avatar" src={pokemon.sprites.front_default}></img>
          
          <h1 className="pokemon-name">{pokemon.name.toUpperCase()}</h1>
          <div className="stats-div">
            <p className="pokemon-weight">Id: {pokemon.id}</p>
            <p className="pokemon-weight">Weight: {pokemon.weight}</p>
          </div>  
        <div className="abilities-main-wrapper">
          <h4>Abilities</h4>
          <div className="pokemon-abilities">
              {abilities.map((data, i) => {
                return <p>{data.ability.name}</p>
              })
            }
          </div>
        </div>
        <div className="types-main-wrapper">
        <h4>Types</h4>
          <div className="pokemon-types">
              {types.map((data, i) => {
              return <p>{data.type.name}</p>
            })
          }
          </div>
        </div>
      </div>
        </Link>
      }
    </>
  )
}

export default Pokemon
