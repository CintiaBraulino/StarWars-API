import { Container, Divider, ImageList, ImageListItem, Link, Stack } from "@mui/material";
import { FC } from "react";import { filmsPayloadResponse } from "../../../services/films/FilmsService";
import { planetsPayloadResponse } from "../../../services/planets/PlanetsService";

export type CardPlanetsProps = {
    planets: planetsPayloadResponse
}

const CardPlanets: FC<CardPlanetsProps> = ({planets}) => {
    return (
        <Stack direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={10} className="actor" alignItems={'center'} padding={5}>
              <h3>{planets.name}</h3>
              <Container>
                <div>
                  <p >rotation period: {planets.rotation_period}</p>
                  <p >orbital period: {planets.orbital_period}</p>
                  <p >diameter: {planets.diameter}</p>
                  <p >climate: {planets.climate}</p>
                </div>
                <div>
                  <p >gravity: {planets.gravity}</p>
                  <p >terrain: {planets.terrain}</p>
                  <p >surface water: {planets.surface_water}</p>
                  <p >population: {planets.population}</p>
                </div>
              </Container>
              <div>
                <img
                    src= {`https://starwars-visualguide.com/assets/img/planets/${(planets.url).replace(/[^0-9]/g,'')}.jpg`}
                    width={500} height={450} 
                    alt={planets.name}
                />
              </div>
              <div className="section">
                {
                planets.residents.length > 0 && (
                    <>
                    <h3>CARACTERS</h3>
                    <ImageList cols={4}>
                        {planets.residents.map((characters:string)=>
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
                planets.films.length > 0 && (
                    <>
                    <h3>FILMS</h3>
                    <ImageList cols={4}>
                        {planets.films.map((films:string)=>
                        <Link href={'/films/'+ (films).replace(/[^0-9]/g,'')} key={films}>
                            <ImageListItem key={films} >
                                <img
                                src= {`https://starwars-visualguide.com/assets/img/films/${(films).replace(/[^0-9]/g,'')}.jpg`}
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
export default CardPlanets;