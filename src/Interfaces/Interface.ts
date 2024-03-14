type Ipokemon = {
    name: number,
    id: number,
    abilities: string[],
    moves: string[],
    sprites: Sprites;
    types: PokemonTypes[],
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

export default Ipokemon; 