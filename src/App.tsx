import React, { useEffect, useState } from "react";
import "./App.css";
import NavTitleComponent from "./Components/NavTitleComponent";
import LeftColumnComponent from "./Components/LeftColumnComponent";
import RightColumnComponent from "./Components/RightColumnComponent";
import { prettyWord, getPokemon, getLocation, getEvo, getSpecies, makeEvoArray } from "./DataServices/DataService";
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
        },
        showdown: {
          front_default: " string",
          front_shiny: "string",
        }
      }
    },
    types: [],
    location_area_encounters: "",
    species: { url: "" }
  };

  const changeShiny = () => {
    if(shine){
    
      setshine(false)
    }
    else{
     
      setshine(true)
    }
  
  }
  const [pokemonFetch, setPokemonFetch] = useState<Ipokemon>(dummyPokemon);
  // const [locationData, setlocationData] = useState<string>("");
  const [SearchName, setSearchName] = useState<string>("591");
  const [searchInput, setsearchInput] = useState<string>("591");

  const [movesArray, setmovesArray] = useState<string[]>([]);
  const [abilitiesArray, setabilitiesArray] = useState<string[]>([]);
  const [typesArray, settypesArray] = useState<string[]>([]);
  const [locationSet, setlocationSet] = useState<string>("Not Found in the wild")
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [desc, setdesc] = useState<string>("");
  const [evoURLS, setevoURLS] = useState<string[][]>([]);
  const [evoNames, setevoNames] = useState<(string | string[])[]>([]);
  const [shine, setshine] = useState<boolean>(false);

  const searchBtn = () => {
    setsearchInput(SearchName);
  }

  const randomPkmn = () => {
    var randomNumber = Math.floor(Math.random() * 917) + 1;
    setsearchInput(`${randomNumber}`)
  }
  //  const [count, setCount] = useState<number>("bob")
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await getPokemon(searchInput);
      setPokemonFetch(fetchedData);
      console.log(fetchedData);
      const fetchedLocation = await getLocation(fetchedData.location_area_encounters);
      // console.log(fetchedLocation);
      if (fetchedLocation.length > 0) {
        setlocationSet(prettyWord(fetchedLocation[0].location_area.name));
      }

      let movesData: string[];
      movesData = (fetchedData.moves).map(ele => prettyWord(ele.move.name));
      setmovesArray(movesData);
      let abilityData: string[] = (fetchedData.abilities).map(ele => prettyWord(ele.ability.name));
      setabilitiesArray(abilityData);
      let typesData: string[] = (fetchedData.types).map(ele => prettyWord(ele.type.name));
      settypesArray(typesData);
      setName(prettyWord(fetchedData.name));
      setId(fetchedData.id)
      if(shine){
        setImage(fetchedData.sprites.other["official-artwork"].front_shiny)
      }
      else{
        setImage(fetchedData.sprites.other["official-artwork"].front_default)
      }
      

      const fetchedSpecies = await getSpecies(fetchedData.species.url)

      for (let i = 0; i < fetchedSpecies.flavor_text_entries.length; i++) {
        if (fetchedSpecies.flavor_text_entries[i].language.name == "en") {
            setdesc(fetchedSpecies.flavor_text_entries[i].flavor_text)
            break;
        }
    }
      const fetchedEvo = await getEvo(fetchedSpecies.evolution_chain.url)

      const evoArray = await makeEvoArray(fetchedEvo);
      setevoNames(evoArray)
      console.log(evoArray)

      // const test = evoArray.map(async (element) => {
      //   const data = await getPokemon(element)
      //   element = data.sprites.other.showdown.front_default
      // })
      // evoArray.map(async e => {
      //   for(let i = 0; i < e.length; i++ ){
          
      //     const data = await getPokemon(e[i])
      //     return(data.sprites.other.showdown.front_default)
      //   }
      // })

      const pokemonSprites = await Promise.all(
        evoArray.map(async e => {
          const sprites = [];
          for(let i = 0; i < e.length; i++) {
            const data = await getPokemon(e[i]);
            if(shine){
              sprites.push(data.sprites.other.showdown.front_shiny);
            }
            else{
              sprites.push(data.sprites.other.showdown.front_default);
            }
            
          }
          return sprites;
        })
      );
      setevoURLS(pokemonSprites);
      console.log(pokemonSprites)
      console.log(evoURLS)


    }

    getData();

  }, [searchInput, shine])

 

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
    <div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed h-300vh">
      <NavTitleComponent onChange={setSearchName} newValue={searchBtn} getRand={randomPkmn} />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
        <div>
          <LeftColumnComponent name={name} id={id} image={image} evos={evoURLS} evoNames={evoNames} shiny={changeShiny}/>
        </div>
        <div>
          <RightColumnComponent moves={movesArray} abilities={abilitiesArray} types={typesArray} location={locationSet} desc={desc}/>
        </div>

      </div>
    </div>
  );
}

export default App;
