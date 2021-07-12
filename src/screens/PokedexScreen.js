import { computeHeadingLevel } from '@testing-library/dom';
import React, { useState, useEffect} from 'react'
import Pokemon from '../components/Pokemon'
import './styles.css'
import LoadingScreen from '../components/LodingScreen'

function PokedexScreen(props) {

  console.log('RUNNING');
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState();
  const [pokemonList, setPokemonList] = useState()
  const [error, setError] = useState(false)
  const { setPreviousUrl, setNextUrl } = props
  
  const fetchPokemons = async (url) =>  {
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data)
      setPreviousUrl(data.previous)
      setNextUrl(data.next)
      setPokemonList(data.results)
      setLoading(false);
    } catch {
      setError('Could not retrive any data')
      setLoading(false);
      console.log('Error:', error)
    }
  }

  useEffect( async() => {
    setLoading(true)
    const { url } = props
    await fetchPokemons(url)
    
  }, [props])

  return (
    <div className="main-background-screen">
      {loading ? <LoadingScreen/> : 
        <div className="main-list-wrapper">
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
