import {ILocationFetch, Ipokemon} from "../Interfaces/Interface";
function prettyWord(input:string) {
    return input.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const getPokemon = async () => {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/6")
    const data: Ipokemon = await promise.json();
    // console.log(data);
    return data;
}

const getLocation = async (url:string) => {
    const promise = await fetch(url)
    const data: ILocationFetch[] = await promise.json();
    // console.log(data);
    return data;
}

export { getPokemon, getLocation, prettyWord}; 