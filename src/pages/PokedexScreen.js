import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Pokemon from '../components/Pokemon'


function PokedexScreen() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState();
  const [pokemonList, setPokemonList] = useState()
  const [error, setError] = useState(false)
  
  const fetchPokemons = async () =>  {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
      const response = await fetch(url);
      const data = await response.json();
      setData(data)
      console.log('Data:', data)
      setPokemonList(data.results)
      setLoading(false);
    } catch {
      setError('Could not retrive any data')
      setLoading(false);
      console.log('Error:', error)
    }
  }

  useEffect( async() => {
    await fetchPokemons()
    
  }, [])

  return (
    <div>
      {loading ? <h1>...Loading...</h1> : 
        <div>
          <h1>Here are some pokemons</h1>
          <div className="pokemon-list-wrapper">
            {pokemonList.map((pokemon) => {
              return (<Pokemon name={pokemon.name} url={pokemon.url} />)
            })}
          </div>
        </div>
      }
    </div>
  )
}

export default PokedexScreen
