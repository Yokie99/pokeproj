import React, { useEffect, useState } from "react";
import "./App.css";
import NavTitleComponent from "./Components/NavTitleComponent";
import LeftColumnComponent from "./Components/LeftColumnComponent";
import RightColumnComponent from "./Components/RightColumnComponent";
import { getPokemon } from "./DataServices/DataService";
import Ipokemon from "./Interfaces/Interface";

function App() {
  const [pokemonFetch, setPokemonFetch] = useState<Ipokemon>();
//  const [count, setCount] = useState<number>("bob")
useEffect(() => {
  const getData = async () => {
    const fetechedData = await getPokemon();
    setPokemonFetch(fetechedData)
    console.log(fetechedData)
    
  }
  getData();
 
},[])
// console.log(pokemonFetch?.sprites)
console.log(pokemonFetch?.types[0].type.name)
// console.log(pokemonFetch?.moves[0])

// console.log(pokemonFetch?.sprites.other["official-artwork"].front_default)
// console.log(pokemonFetch?.abilities)
// console.log(pokemonFetch?.name)
// console.log(pokemonFetch?.id)
  return (
    <div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed h-screen">
<NavTitleComponent />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
        
        <div>
          <LeftColumnComponent/>
        </div>
        <div>
          <RightColumnComponent/>
        </div>

      </div>
    </div>
  );
}

export default App;
