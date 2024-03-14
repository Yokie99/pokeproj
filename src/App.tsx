import React, { useEffect, useState } from "react";
import "./App.css";
import NavTitleComponent from "./Components/NavTitleComponent";
import LeftColumnComponent from "./Components/LeftColumnComponent";
import RightColumnComponent from "./Components/RightColumnComponent";
import { getPokemon } from "./DataServices/DataService";
import pokemon from "./Interfaces/Interface";

function App() {

  const [pokemonFetch, setPokemonFetch] = useState<pokemon>();

useEffect(() => {
  const getData = async () => {
    const fetechedData = await getPokemon();
    setPokemonFetch(fetechedData)
    console.log(fetechedData)
    
  }
  getData();
},[])
console.log(pokemonFetch?.abilities)
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
