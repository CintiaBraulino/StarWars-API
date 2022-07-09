import { Button, Container, ImageList, ImageListItem, ImageListItemBar, Link, Modal } from "@mui/material";
import axios from "axios";
import React, { FC, useEffect } from "react";
import { useRef, useState } from "react";
import getData from "../../services/axios-config";
import LukeSkywalker from '../../assets/characters/LukeSkywalker.jpg'
import ModalDetails from "../../components/ModalDetails";
import Image from "next/image";
import retrieveVehicles, { vehiclesPayloadResponse } from "../../services/vehicles/VehiclesService";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Vehicles: FC = () => {
 const [vehicles, setVehicles] = useState<vehiclesPayloadResponse[]>([]);
 const [page, setPage] = useState()

 const handleScrollTop = () => {
   window.scrollTo(0, 0)
 }

 useEffect(() => {
     const getVehicles = async () => {
       const res = await retrieveVehicles()
       setVehicles(res.results)
       setPage(res.next)
     }
     getVehicles()
 
   }, [])


const handleAddActors = async () => {
 if (page) {
   const res = await getData(page)
   setVehicles([...vehicles, ...res.results])
   setPage(res.next)
 }
}
return( 
  <Container maxWidth="xl">
  <ImageList cols={5}>
   {vehicles.map((item) => (
    <Link  href={'/vehicles/'+ (item.url).replace(/[^0-9]/g,'')} key={item.name}>
     <ImageListItem key={item.name}>
       <img
         src= {`https://starwars-visualguide.com/assets/img/vehicles/${(item.url).replace(/[^0-9]/g,'')}.jpg`}
         width={500} height={450} 
         //srcSet={luke}
         alt={item.name}
         loading="lazy"
       />
       <ImageListItemBar
         title={item.name}
         //subtitle={<Button onClick={handleOpen} >Details</Button>}
         position="below"
       /> 
     </ImageListItem>
     </Link>
   ))}
   </ImageList>
   <>
     {
       vehicles.length< 60 ? (
         <Button type="button" fullWidth aria-label={'VIEW MORE'} onClick={handleAddActors} className={'view__button'} variant="outlined" endIcon={<ArrowDownwardIcon />} > VIEW MORE </Button>
       ): (
         <Button type="button" fullWidth aria-label={'BACK TO TOP'} onClick={handleScrollTop} className={'view__button'} variant="outlined" endIcon={<ArrowUpwardIcon />}> BACK TO TOP </Button>
       )
     }

   </>

 </Container>
)
}

export default Vehicles;