import Ipokemon from "../Interfaces/Interface";

const getPokemon = async () => {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/1")
    const data: Ipokemon = await promise.json();
    // console.log(data);
    return data;
}

export { getPokemon }; 