import React from 'react'
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <h1>Hellow from HomeScreen</h1>
      <Link to="/pokedex">
        <button>Start</button>
      </Link>
    </div>
  )
}

export default HomeScreen
