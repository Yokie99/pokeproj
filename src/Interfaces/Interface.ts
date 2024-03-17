export type Ipokemon = {
    name: string,
    id: number,
    abilities: Ability[],
    moves: Moves[],
    sprites: Sprites;
    types: PokemonTypes[],
    location_area_encounters: string,
    species: {url:string}
}

interface Sprites {
    other: {
        "official-artwork": {
            front_default: string;
            front_shiny: string;
        };
        showdown:{
            front_default: string;
            front_shiny: string;
        }
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

export type ISpecies = {
    evolution_chain: {url:string}
    flavor_text_entries: FlavorTextEntry[]
}
interface FlavorTextEntry {
    flavor_text: string;
    language: Language;
}
interface Language {
    name: string;
    url: string;
}
export type IEvo = {
    baby_trigger_item: string | null;
    chain: EvolutionChain;
    id: number;
}
interface EvolutionChain {
    evolves_to: EvolutionChain[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  }


