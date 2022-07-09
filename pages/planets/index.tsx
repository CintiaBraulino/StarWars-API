import { Button, Container, ImageList, ImageListItem, ImageListItemBar, Link } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import getData from "../../services/axios-config";;
import retrievePlanets, { planetsPayloadResponse } from "../../services/planets/PlanetsService";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Planets: FC = () => {
 const [planets, setPlanets] = useState<planetsPayloadResponse[]>([]);
 const [page, setPage] = useState()

 const handleScrollTop = () => {
   window.scrollTo(0, 0)
 }

 useEffect(() => {
     const getPlanets = async () => {
       const res = await retrievePlanets()
       setPlanets(res.results)
       setPage(res.next)
     }
     getPlanets()
   }, [])

const handleAddActors = async () => {
 if (page) {
   const res = await getData(page)
   setPlanets([...planets, ...res.results])
   setPage(res.next)
 }
}
return( 
  <Container maxWidth="xl">
  <ImageList cols={5}>
   {planets.map((item) => (
    <Link href={'/planets/'+ (item.url).replace(/[^0-9]/g,'')} key={item.name}>
     <ImageListItem key={item.name}>
       <img
         src= {`https://starwars-visualguide.com/assets/img/planets/${(item.url).replace(/[^0-9]/g,'')}.jpg`}
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
       planets.length< 60 ? (
         <Button type="button" fullWidth aria-label={'VIEW MORE'} onClick={handleAddActors} className={'view__button'} variant="outlined" endIcon={<ArrowDownwardIcon />} > VIEW MORE </Button>
       ): (
         <Button type="button" fullWidth aria-label={'BACK TO TOP'} onClick={handleScrollTop} className={'view__button'} variant="outlined" endIcon={<ArrowUpwardIcon />}> BACK TO TOP </Button>
       )
     }

   </>
 </Container>
)
}
export default Planets;