import { Container, Divider, ImageList, ImageListItem, Link, Stack } from "@mui/material";
import { FC } from "react";
import { starshipsPayloadResponse } from "../../../services/starships/StarshipsService";

export type CardStarshipsProps = {
    starships: starshipsPayloadResponse
}

const CardStarships: FC<CardStarshipsProps> = ({starships}) => {
    return (
        <Stack direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={10} className="actor" alignItems={'center'} padding={5}>
              <h3>{starships.name}</h3>
              <Container>
                <div>
                  <p >model: {starships.model}</p>
                  <p >manufacturer: {starships.manufacturer}</p>
                  <p >cost in credits: {starships.cost_in_credits}</p>
                  <p >length: {starships.length}</p>
                  <p >max atmosphering speed: {starships.max_atmosphering_speed}</p>
                  <p >crew: {starships.crew}</p>
                </div>
                <div>
                  <p >passengers: {starships.passengers}</p>
                  <p >cargo capacity: {starships.cargo_capacity}</p>
                  <p >consumables: {starships.consumables}</p>
                  <p >hyperdrive rating: {starships.hyperdrive_rating}</p>
                  <p >MGLT: {starships.MGLT}</p>
                  <p >starship class: {starships.starship_class}</p>
                </div>
              </Container>
              <div>
                <img
                    src= {`https://starwars-visualguide.com/assets/img/starships/${(starships.url).replace(/[^0-9]/g,'')}.jpg`}
                    width={500} height={450} 
                    alt={starships.name}
                />
              </div>
              <div className="section">
                {
                starships.pilots.length > 0 && (
                    <>
                    <h3>CARACTERS</h3>
                    <ImageList cols={4}>
                        {starships.pilots.map((characters:string)=>
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
                starships.films.length > 0 && (
                    <>
                    <h3>FILMS</h3>
                    <ImageList cols={4}>
                        {starships.films.map((films:string)=>
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
export default CardStarships;