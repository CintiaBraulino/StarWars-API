import getData from "../axios-config";

const imagePeople = async () => await getData("https://akabab.github.io/starwars-api/api/all.json")
export default imagePeople

export type ImagePeoplePaylopadResponse ={
    name: string;
}