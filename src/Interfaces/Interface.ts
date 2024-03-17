export type Ipokemon = {
    name: string,
    id: number,
    abilities: Ability[],
    moves: Moves[],
    sprites: Sprites;
    types: PokemonTypes[],
    location_area_encounters: string,
}

interface Sprites {
    other: {
        "official-artwork": {
            front_default: string;
            front_shiny: string;
        };
    }
}
interface PokemonTypes {
    type: {name:string};
}

interface Moves{
    move: {name:string};
}

interface Ability{
    ability: {name:string}
}

export type ILocationFetch={
location_area: {name:string}
}


