import React, { useEffect, useState } from 'react';
import "./Pokemon.css"

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true)

  const fetchPokemon = async () => {
    const url = props.url
    const response = await fetch(url)
    const data = await response.json()
    setPokemon(data)
    console.log(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <>
      { loading ? <div>Loading Pokemon</div> : <div className="pokemon-wrapper">
      <h1 className="pokemon-name">Name: {pokemon.name}</h1>
      <h1 className="pokemon-weight">Weight: {pokemon.weight}</h1>
      </div>
      }
    </>
  )
}

export default Pokemon
