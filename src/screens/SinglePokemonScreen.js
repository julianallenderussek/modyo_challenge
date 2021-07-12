import React, { useState, useEffect } from 'react'
import './SinglePokemonScreen.css'
import loadingscreen from '../components/LodingScreen'
import LoadingScreen from '../components/LodingScreen'

const SinglePokemonScreen = (props) => {
    
    const [loading, setLoading] = useState(true)
    const [pokemonData, setPokemonData] = useState()
    const [evolutionsArr, setEvolutionsArr] = useState()
    const pokemonId = props.id 

    const getEvolutions = async (data) => {
        let arr = []
        
        // Try and catch to destructure evolution chain. Adding true values to evolution array.
        let firstEvolution
        try {
            let firstEvolution = data.chain.species.name
            arr.push(firstEvolution)
        }
        catch {
            firstEvolution = ""
        }
        
        let secondEvolution
        try {
            secondEvolution = data.chain.evolves_to[0].species.name
            arr.push(secondEvolution)
        }
        catch {
            secondEvolution = ""
        }

        let thirdEvolution
        try {
            let thirdEvolution = data.chain.evolves_to[0].evolves_to[0].species.name
            arr.push(thirdEvolution)
        }
        catch {
            thirdEvolution = ""
        }
        
        console.log(arr)
        await setEvolutionsArr(arr)
        console.log(evolutionsArr);
        
        
    }

    const fetchEvolutionChain = async (evolutionUrl) => {
        const response = await fetch(evolutionUrl);
        const data = await response.json();
        // console.log(data, 'Evolution Data')
        // console.log(data.chain.evolves_to[0].species.name, 'Evolution Data')
        // console.log(data.chain.evolves_to[0].evolves_to[0].species.name, 'Evolution Data')
        // setEvolutionsData(data.chain.evolves_to)
        await getEvolutions(data)
        setLoading(false)
    }
    
    const fetchPokemonDetails = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        const response = await fetch(url);
        const data = await response.json();
        const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
        const data2 = await response2.json()
        console.log(data2.evolution_chain.url);
        fetchEvolutionChain(data2.evolution_chain.url)
        setPokemonData(data)
        
    }

    useEffect( async() => {
        setLoading(true)
        fetchPokemonDetails()
    }, [props])

    return (
        <div className="main-wrapper-single-pokemon">
            {loading ? <LoadingScreen/> : (
                <div className="pokemon-details-wrapper">
                    <img className="pokemon-image-single-pokemon"src={`${pokemonData.sprites.other.dream_world.front_default}`}></img>
                    <div className="pokemon-description-wrapper">
                        <h1 className="pokemon-details-name">{pokemonData.name.toUpperCase()}</h1>
                        <p className="pokemon-details-name"> <strong>Weight:</strong> {pokemonData.weight}</p>
                        <div className="pokemon-details-abilities">
                                {pokemonData.abilities.map((data, i) => {
                                return <p> <strong>Ability {i + 1}: </strong> {data.ability.name.toUpperCase()}</p>
                                })
                            }
                        </div>
                        <div className="pokemon-details-types">
                                {pokemonData.types.map((data, i) => {
                                return <p><strong>Ability {i + 1}:</strong> {data.type.name.toUpperCase()}</p>
                                })
                            }
                        </div>
                        <div className="pokemon-details-types">
                                <h1>Evolutions:</h1>
                                <div>
                                    {evolutionsArr.map((evolution, i) => {
                                    return (<div className="level-row-div">
                                        <p>Level {i+1}: </p> 
                                        <strong >{evolution.toUpperCase()}</strong>
                                    </div>
                                    )
                                })
                               }
                            </div>
                        </div>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default SinglePokemonScreen
