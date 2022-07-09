import { Container, Divider, ImageList, ImageListItem, Link, Stack } from "@mui/material";
import { FC } from "react";
import { peoplePayloadResponse } from "../../../services/people/PeopleService";

export type CardPeopleProps = {
    people: peoplePayloadResponse
}

const CardPeople: FC<CardPeopleProps> = ({people}) => {
    return (
        <Stack direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={10} className="actor" alignItems={'center'} padding={5}>
              <h3>{people.name}</h3>
              <Container>
                <div>
                  <p >Height: {people.heigth}</p>
                  <p >Mass: {people.mass}</p>
                  <p >Hair color: {people.hair_color}</p>
                </div>
                <div>
                  <p >Eye color: {people.skin_color}</p>
                  <p >Birth year: {people.birth_year}</p>
                  <p >Gender: {people.gender}</p>
                </div>
              </Container>
              <div>
                <img
                    src= {`https://starwars-visualguide.com/assets/img/characters/${(people.url).replace(/[^0-9]/g,'')}.jpg`}
                    width={500} height={450} 
                    alt={people.name}
                />
              </div>
              <div className="section">
                {
                people.films.length > 0 && (
                    <>
                    <h3>FILMS</h3>
                    <ImageList cols={4}>
                        {people.films.map((films:string)=>
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
                {
                people.species.length > 0 && (
                    <>
                    <h3>SPECIES</h3>
                    <ImageList cols={4}>
                        {people.species.map((species:string)=>
                        <Link href={'/species/'+ (species).replace(/[^0-9]/g,'')} key={species}>
                            <ImageListItem key={species} >
                                <img
                                src= {`https://starwars-visualguide.com/assets/img/species/${(species).replace(/[^0-9]/g,'')}.jpg`}
                                width={50} height={50}/>
                            </ImageListItem> 
                        </Link>
                        )}       
                    </ImageList>
                    </>
                )}
                {
                people.vehicles.length > 0 && (
                    <>
                    <h3>VEHICLES</h3>
                    <ImageList cols={4}>
                        {people.vehicles.map((vehicles:string)=>
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
                people.starships.length > 0 && (
                    <>
                    <h3>STARSHIPS</h3>
                    <ImageList cols={4}>
                        {people.starships.map((starships:string)=>
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
                
                </div>
        </Stack>
        
)
}
export default CardPeople;