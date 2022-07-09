import getData from "../axios-config";

const retrievePeople = async () => await getData("https://swapi.dev/api/people/")
export default retrievePeople


export type peoplePayloadResponse ={
    name: string;
    heigth: string;
    mass: string;
    hair_color: string;
    skin_color: string; 
    eye_color: string; 
    birth_year: string;
    gender: string;
    homeworld: string;
    films: [];
    species: [], 
    vehicles: [], 
    starships:[],
    url: string; 
}