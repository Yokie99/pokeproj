import React, { useEffect, useState } from "react";
import "./App.css";
import NavTitleComponent from "./Components/NavTitleComponent";
import LeftColumnComponent from "./Components/LeftColumnComponent";
import RightColumnComponent from "./Components/RightColumnComponent";
import { prettyWord, getPokemon, getLocation } from "./DataServices/DataService";
import { ILocationFetch, Ipokemon } from "./Interfaces/Interface";

function App() {
  const dummyPokemon: Ipokemon = {
    name: "Big Boy",
    id: 0,
    abilities: [],
    moves: [],
    sprites: {
      other: {
        "official-artwork": {
          front_default: "",
          front_shiny: "",
        }
      }
    },
    types: [],
    location_area_encounters: "",
  };

  const [pokemonFetch, setPokemonFetch] = useState<Ipokemon>(dummyPokemon);
  const [locationData, setlocationData] = useState<string>("https://pokeapi.co/api/v2/pokemon/1/encounters");


  const [movesArray, setmovesArray] = useState<string[]>([]);
  const [abilitiesArray, setabilitiesArray] = useState<string[]>([]);
  const [typesArray, settypesArray] = useState<string[]>([]);
  const [locationSet, setlocationSet] = useState<string>("Not Found in the wild")


  //  const [count, setCount] = useState<number>("bob")
  useEffect(() => {
    const getData = async () => {
      const fetechedData = await getPokemon();
      setPokemonFetch(fetechedData)
      // console.log(fetechedData)
      setlocationData(pokemonFetch?.location_area_encounters)
      // console.log(locationData)
      const fetchedLocation = await getLocation(locationData)
      console.log(fetchedLocation[0].location_area.name)
      setlocationSet(prettyWord(fetchedLocation[0].location_area.name))
      let movesData:string[];
      movesData = (fetechedData.moves).map(ele => prettyWord(ele.move.name));
      setmovesArray(movesData)
      let abilityData:string[] = (fetechedData.abilities).map(ele => prettyWord(ele.ability.name));
      setabilitiesArray(abilityData)
      let typesData: string[] = (fetechedData.types).map(ele => prettyWord(ele.type.name))
      settypesArray(typesData)
    }

    getData();

  }, [])


  // console.log(pokemonFetch)
  // console.log(pokemonFetch?.types[0].type.name)
  // console.log(pokemonFetch?.sprites.other["official-artwork"].front_default)
  // console.log(pokemonFetch?.moves[0].move.name)
  // console.log(pokemonFetch?.moves)
  

  
  // console.log(pokemonFetch?.abilities[0].ability.name)
  // console.log(pokemonFetch?.name)
  // console.log(pokemonFetch?.id)

  // console.log(pokemonFetch?.location_area_encounters)
  // setlocationData(pokemonFetch?.location_area_encounters)
  // console.log(locationFetch)


  //  setmovesArray(movesData);

  return (
    <div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed h-screen">
      <NavTitleComponent />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
        <div>
          <LeftColumnComponent />
        </div>
        <div>
          <RightColumnComponent moves={movesArray} abilities={abilitiesArray} types={typesArray} location={locationSet}/>
        </div>

      </div>
    </div>
  );
}

export default App;
