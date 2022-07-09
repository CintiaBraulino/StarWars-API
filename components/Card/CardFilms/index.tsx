import { Container, Divider, ImageList, ImageListItem, Link, Stack } from "@mui/material";
import { FC } from "react";
import { filmsPayloadResponse } from "../../../services/films/FilmsService";

export type CardFilmsProps = {
    films: filmsPayloadResponse
}

const CardFilms: FC<CardFilmsProps> = ({films}) => {
    return (
        <Stack direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={10} className="actor" alignItems={'center'} padding={5}>
              <h3>{films.title}</h3>
              <Container>
                <div>
                  <p >episode id: {films.episode_id}</p>
                  <p >director: {films.director}</p>
                  <p >producer: {films.producer}</p>
                  <p >release date: {films.release_date}</p>
                </div>
                <div>
                  <p >opening_crawl: {films.opening_crawl}</p>
                </div>
              </Container>
              <div>
                <img
                    src= {`https://starwars-visualguide.com/assets/img/films/${(films.url).replace(/[^0-9]/g,'')}.jpg`}
                    width={500} height={450} 
                    alt={films.title}
                />
              </div>
              <div className="section">
                {
                films.characters.length > 0 && (
                    <>
                    <h3>CARACTERS</h3>
                    <ImageList cols={4}>
                        {films.characters.map((characters:string)=>
                        <Link href={'/people/'+ (characters).replace(/[^0-9]/g,'')} key={characters}>
                            <ImageListItem key={characters} >
                                <img
                                src= {`https://starwars-visualguide.com/assets/img/characters/${(characters).replace(/[^0-9]/g,'')}.jpg`}
                                width={50} height={50}/>
                            </ImageListItem> 
                        </Link>
                        )}       
                    </ImageList>
                    </>
                )}
                {
                films.planets.length > 0 && (
                    <>
                    <h3>PLANETS</h3>
                    <ImageList cols={4}>
                        {films.planets.map((planets:string)=>
                        <Link href={'/planets/'+ (planets).replace(/[^0-9]/g,'')} key={planets}>
                            <ImageListItem key={planets} >
                                <img
                                src= {`https://starwars-visualguide.com/assets/img/planets/${(planets).replace(/[^0-9]/g,'')}.jpg`}
                                width={50} height={50}/>
                            </ImageListItem> 
                        </Link>
                        )}       
                    </ImageList>
                    </>
                )}
                {
                films.vehicles.length > 0 && (
                    <>
                    <h3>VEHICLES</h3>
                    <ImageList cols={4}>
                        {films.vehicles.map((vehicles:string)=>
                        <Link href={'/vehicles/'+ (vehicles).replace(/[^0-9]/g,'')} key={vehicles}>
                            <ImageListItem key={vehicles} >
                                <img
                                src= {`https://starwars-visualguide.com/assets/img/vehicles/${(vehicles).replace(/[^0-9]/g,'')}.jpg`}
                                width={50} height={50}/>
                            </ImageListItem> 
                        </Link>
                        )}       
                    </ImageList>
                    </>
                )}
                {
                films.starships.length > 0 && (
                    <>
                    <h3>STARSHIPS</h3>
                    <ImageList cols={4}>
                        {films.starships.map((starships:string)=>
                        <Link href={'/starships/'+ (starships).replace(/[^0-9]/g,'')} key={starships}>
                            <ImageListItem key={starships} >
                                <img
                                src= {`https://starwars-visualguide.com/assets/img/vehicles/${(starships).replace(/[^0-9]/g,'')}.jpg`}
                                width={50} height={50}/>
                            </ImageListItem> 
                        </Link>
                        )}       
                    </ImageList>
                    </>
                )}
                {
                films.species.length > 0 && (
                    <>
                    <h3>SPECIES</h3>
                    <ImageList cols={4}>
                        {films.species.map((species:string)=>
                        <Link href={'/species/'+ (species).replace(/[^0-9]/g,'')} key={species}>
                            <ImageListItem key={species} >
                                <img
                                src= {`https://starwars-visualguide.com/assets/img/vehicles/${(species).replace(/[^0-9]/g,'')}.jpg`}
                                width={50} height={50}/>
                            </ImageListItem> 
                        </Link>
                        )}       
                    </ImageList>
                    </>
                )}
                
                </div>
        </Stack>
        
)
}
export default CardFilms;