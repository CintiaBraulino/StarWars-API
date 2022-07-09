import getData from "../axios-config";

const retrieveSpecies = async () => await getData("https://swapi.dev/api/species/")
export default retrieveSpecies

export type speciesPayloadResponse = {
    name:string;
    classification:string;
    designation:string;
    average_height:string;
    skin_colors:string;
    hair_colors:string;
    eye_colors:string;
    average_lifespan:string;
    homeworld:string;
    language:string;
    people: [];
    films: []; 
    url: string;
}
