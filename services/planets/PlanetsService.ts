import getData from "../axios-config";

const retrievePlanets = async () => await getData("https://swapi.dev/api/planets/")
export default retrievePlanets

export type planetsPayloadResponse = {
    name:string;
    rotation_period:string;
    orbital_period:string;
    diameter:string;
    climate:string;
    gravity:string;
    terrain:string;
    surface_water:string;
    population:string;
    residents: [];
    films: []; 
    url: string; 
}
