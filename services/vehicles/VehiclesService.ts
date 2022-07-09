import getData from "../axios-config";

const retrieveVehicles = async () => await getData("https://swapi.dev/api/vehicles/")
export default retrieveVehicles

export type vehiclesPayloadResponse = {
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
    vehicle_class:string;
    pilots: [];
    films: []; 
    url: string;
}
