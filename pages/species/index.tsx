import { Button, Container, ImageList, ImageListItem, ImageListItemBar, Link } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import getData from "../../services/axios-config";
import retrieveSpecies, { speciesPayloadResponse } from "../../services/species/SpeciesService";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Species: FC = () => {
 const [species, setSpecies] = useState<speciesPayloadResponse[]>([]);
 const [page, setPage] = useState()

 const handleScrollTop = () => {
   window.scrollTo(0, 0)
 }

 useEffect(() => {
     const getSpecies = async () => {
       const res = await retrieveSpecies()
       setSpecies(res.results)
       setPage(res.next)
     }
     getSpecies()
   }, [])


const handleAddActors = async () => {
 if (page) {
   const res = await getData(page)
   setSpecies([...species, ...res.results])
   setPage(res.next)
 }
}
return( 
  <Container maxWidth="xl">
  <ImageList cols={5}>
   {species.map((item) => (
    <Link href={'/species/'+ (item.url).replace(/[^0-9]/g,'')} key={item.name}>
     <ImageListItem key={item.name}>
       <img
         src= {`https://starwars-visualguide.com/assets/img/species/${(item.url).replace(/[^0-9]/g,'')}.jpg`}
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
       species.length< 37 ? (
         <Button type="button" fullWidth aria-label={'VIEW MORE'} onClick={handleAddActors} className={'view__button'} variant="outlined" endIcon={<ArrowDownwardIcon />} > VIEW MORE </Button>
       ): (
         <Button type="button" fullWidth aria-label={'BACK TO TOP'} onClick={handleScrollTop} className={'view__button'} variant="outlined" endIcon={<ArrowUpwardIcon />}> BACK TO TOP </Button>
       )
     }
   </>
 </Container>
)
}

export default Species;