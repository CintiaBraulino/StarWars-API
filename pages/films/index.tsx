import { Button, Container, ImageList, ImageListItem, ImageListItemBar, Link, Modal, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import getData from "../../services/axios-config";
import retrieveFilms, { filmsPayloadResponse } from "../../services/films/FilmsService";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Films: FC = () => {
 const [films, setFilms] = useState<filmsPayloadResponse[]>([]);
 const [page, setPage] = useState();
 

 const handleScrollTop = () => {
   window.scrollTo(0, 0)
 }

 useEffect(() => {
     const getFilms = async () => {
       const res = await retrieveFilms()
       setFilms(res.results)
       setPage(res.next)
     }
     getFilms()
   }, [])

const handleAddActors = async () => {
 if (page) {
   const res = await getData(page)
   setFilms([...films, ...res.results])
   setPage(res.next)
 }
}
return( 
  <Container maxWidth="xl">
  <ImageList cols={6}>
   {films.map((item) => (
    <Link href={'/films/'+ (item.url).replace(/[^0-9]/g,'')} key={item.title}>
     <ImageListItem key={item.title}>
       const nameConcat = {((item.title).replace(/\s/g, ''))}
       <img
         src= {`https://starwars-visualguide.com/assets/img/films/${(item.url).replace(/[^0-9]/g,'')}.jpg`}
         width={500} height={450} 
         alt={item.title}
         loading="lazy"
       />
       <ImageListItemBar
         title={item.title}
         //subtitle={<spam>(({item.opening_crawl}).substring(0,10))</spam>}
         position="below"
       /> 
     </ImageListItem>
    </Link>
   ))}
   
 </ImageList>
 <>
     {
       films.length< 6 ? (
         <Button type="button" fullWidth aria-label={'VIEW MORE'} onClick={handleAddActors} className={'view__button'} variant="outlined" endIcon={<ArrowDownwardIcon />}> VIEW MORE  </Button>
       ): (
         <Button type="button" fullWidth aria-label={'BACK TO TOP'} onClick={handleScrollTop} className={'view__button'} variant="outlined" endIcon={<ArrowUpwardIcon />}> BACK TO TOP </Button>
       )
     }

   </>
 </Container>
)
}

export default Films;
