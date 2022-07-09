import getData from "../axios-config";

const retrieveStarships = async () => await getData("https://swapi.dev/api/starships/")
export default retrieveStarships

export type starshipsPayloadResponse = {
    name:string;
    model:string;
    manufacturer:string;
    cost_in_credits:string;
    length:string;
    max_atmosphering_speed:string;
    crew:string;
    passengers:string;
    cargo_capacity:string;
    consumables:string;
    hyperdrive_rating:string;
    MGLT:string;
    starship_class:string;
    pilots: [];
    films: []; 
    url: string; 
}
