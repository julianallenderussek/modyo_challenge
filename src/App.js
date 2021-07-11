import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Pokemon from "./components/Pokemon";
import HomeScreen from './pages/HomeScreen';
import PokedexScreen from "./pages/PokedexScreen";


function App() {
  
  return (
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/">
            <HomeScreen/>
          </Route>
          
          <Route exact path="/pokedex">
            <PokedexScreen/>
          </Route>
          
          <Route exact path="/pokemon/:id">
            <Pokemon/>
          </Route>

        </Switch>
      </BrowserRouter>
  )
}

export default App;
