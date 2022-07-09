import { Container, Divider, ImageList, ImageListItem, Link, Stack } from "@mui/material";
import { FC } from "react";
import { vehiclesPayloadResponse } from "../../../services/vehicles/VehiclesService";

export type CardVehiclesProps = {
    vehicles: vehiclesPayloadResponse
}

const CardVehicles: FC<CardVehiclesProps> = ({vehicles}) => {
    return (
        <Stack direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={10} className="actor" alignItems={'center'} padding={5}>
              <h3>{vehicles.name}</h3>
              <Container>
                <div>
                  <p >model: {vehicles.model}</p>
                  <p >manufacturer: {vehicles.manufacturer}</p>
                  <p >cost in credits: {vehicles.cost_in_credits}</p>
                  <p >length: {vehicles.length}</p>
                  <p >max atmosphering power: {vehicles.max_atmosphering_speed}</p>
                  <p >crew: {vehicles.crew}</p>
                </div>
                <div>
                  <p >passengers: {vehicles.passengers}</p>
                  <p >cargo capacity: {vehicles.cargo_capacity}</p>
                  <p >consumables: {vehicles.consumables}</p>
                  <p >vehicle class: {vehicles.vehicle_class}</p>
                </div>
              </Container>
              <div>
                <img
                    src= {`https://starwars-visualguide.com/assets/img/vehicles/${(vehicles.url).replace(/[^0-9]/g,'')}.jpg`}
                    width={500} height={450} 
                    alt={vehicles.name}
                />
              </div>
              <div className="section">
                {
                vehicles.pilots.length > 0 && (
                    <>
                    <h3>CARACTERS</h3>
                    <ImageList cols={4}>
                        {vehicles.pilots.map((characters:string)=>
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
                vehicles.films.length > 0 && (
                    <>
                    <h3>FILMS</h3>
                    <ImageList cols={4}>
                        {vehicles.films.map((films:string)=>
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
export default CardVehicles;