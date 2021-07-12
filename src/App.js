import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import PokedexList from "./components/PokedexList";
import PokedexSinglePokemon from "./components/PokedexSinglePokemon";
import HomeScreen from './screens/HomeScreen';


function App() {
  
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
          
          <Route exact path="/pokedex">
            <PokedexList/>
          </Route>
          
          <Route exact path="/pokemon/:id">
            <PokedexSinglePokemon/>
          </Route>

        </Switch>
      </BrowserRouter>
  )
}

export default App;
