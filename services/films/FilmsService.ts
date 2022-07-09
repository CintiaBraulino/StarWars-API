import getData from "../axios-config";

const retrieveFilms = async () => await getData("https://swapi.dev/api/films/")
export default retrieveFilms

export type filmsPayloadResponse ={
    title:string;
    episode_id:number;
    opening_crawl:string;
    director:string;
    producer:string;
    release_date:string;
    characters: [];
    planets: [], 
    starships:[],
    vehicles: [],
    species: [],
    url: string; 
}

/*
const getAll = async (page = 1, limit = 10, filter = ' ') : Promise<TFilmsTotalCount| Error> => {
    try{
        const urlRelative = `/films?_page=${page}&_limit=${limit}&title_like=${filter}`;
        const { data, headers } = await api.get(urlRelative);
        if (data){
            return{
                data,
                totalCount:Number(headers['x-total-count'] || limit),
            };
        }
        return new Error('Error ao listar os registros.');
    } catch (error){
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    }
};
*/