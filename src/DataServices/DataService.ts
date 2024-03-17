import { ILocationFetch, ISpecies, Ipokemon, IEvo } from "../Interfaces/Interface";
function prettyWord(input: string) {
    return input.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const getPokemon = async (pkmn: string | string[]) => {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/" + pkmn)
    const data: Ipokemon = await promise.json();
    // console.log(data);
    return data;
}

const getLocation = async (url: string) => {
    const promise = await fetch(url)
    const data: ILocationFetch[] = await promise.json();
    // console.log(data);
    return data;
}

const getEvo = async (url: string) => {
    const promise = await fetch(url)
    const data: IEvo = await promise.json();
    console.log(data);
    return data;
}

const getSpecies = async (url: string) => {
    const promise = await fetch(url)
    const data: ISpecies = await promise.json();
    console.log(data);
    return data;
}

const makeEvoArray = async (fetchedEvo: IEvo) => {
    let evoArr = [];
    let evolves = fetchedEvo.chain.evolves_to;
    if (evolves.length === 0) {
        evoArr.push(fetchedEvo.chain.species.name);
    }
    else {
        for (let i = 0; i < evolves.length; i++) {
            let evo1;
            evo1 = [fetchedEvo.chain.species.name, evolves[i].species.name];

            let evolves2 = evolves[i].evolves_to;

            if (evolves2.length >= 1) {
                for (let j = 0; j < evolves2.length; j++) {
                    let evo2;
                    evo2 = [fetchedEvo.chain.species.name, evolves[i].species.name, evolves2[j].species.name]
                   evoArr.push(evo2);
                }
            }
            else {
                evoArr.push(evo1);
            }
            
        }

    }
return(evoArr)
    for (let i = 0; i < evoArr.length; i++) {
        if (evolves.length === 0) {
            await evolutionGenerator(evoArr[i]);
        }
        else {
            for (let j = 0; j < evoArr[i].length; j++) {
                await evolutionGenerator(evoArr[i][j]);
                // const pElementArrow = document.createElement('p');
                // pElementArrow.classList.add('text-6xl');
                // pElementArrow.textContent = '→';
                // if (j < evoArr[i].length - 1) {

                // }

            }
        }


    }
}
const evolutionGenerator = async (mon: string | string[]) => {

    const data = await getPokemon(mon);
    return (data.sprites.other.showdown.front_default);
    // // console.log(isShiny)
    // if (isShiny == false) {

    // let div = document.createElement('div');
    // let buttonElement = document.createElement('button');
    // let img = document.createElement('img');
    // img.className = ("evoImg mx-auto");


    // img.src = data.sprites.other.showdown.front_default;

    // buttonElement.addEventListener('click', function () {
    //     mainApi(mon);
    // });

    // const pInside = document.createElement('p');
    // pInside.classList.add('text-center');
    // pInside.textContent = prettyWord(mon);

    // buttonElement.appendChild(img);
    // buttonElement.appendChild(pInside);
    // div.appendChild(buttonElement);



    // }
    // else {
    //     let div = document.createElement('div');
    //     let buttonElement = document.createElement('button');
    //     let img = document.createElement('img');
    //     img.className = ("evoImg mx-auto");
    //     img.src = data.sprites.other.showdown.front_shiny;

    //     buttonElement.addEventListener('click', function () {
    //         mainApi(mon);
    //     });

    //     const pInside = document.createElement('p');
    //     pInside.classList.add('text-center');
    //     pInside.textContent = prettyWord(mon);

    //     buttonElement.appendChild(img);
    //     buttonElement.appendChild(pInside);
    //     div.appendChild(buttonElement);


    //     newDiv.append(div);
    // }



}




export { prettyWord, getPokemon, getLocation, getEvo, getSpecies, makeEvoArray }; 