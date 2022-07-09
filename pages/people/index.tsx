import {  FC, useEffect, useState } from 'react';
import getData from "../../services/axios-config";
import { Button, Container, ImageList, ImageListItem, ImageListItemBar, Link } from "@mui/material";
import retrievePeople,{ peoplePayloadResponse  } from "../../services/people/PeopleService";
import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Peoples: FC =() => {

    const [peoples, setPeoples] = useState<peoplePayloadResponse[]>([]);
    const [page, setPage] = useState()

    const handleScrollTop = () => {
      window.scrollTo(0, 0)
    }

    useEffect(() => {
        const getActors = async () => {
          const res = await retrievePeople()
          setPeoples(res.results)
          setPage(res.next)
        }
        getActors()
      }, [])
   

   const handleAddActors = async () => {
    if (page) {
      const res = await getData(page)
      setPeoples([...peoples, ...res.results])
      setPage(res.next)
    }
  }
   return( 
    <Container maxWidth="xl">
     <ImageList cols={5}>
      {peoples.map((item) => (
      <Link href={'/people/'+ (item.url).replace(/[^0-9]/g,'')} key={item.name}>
        <ImageListItem key={item.name}>
          const nameConcat = {((item.name).replace(/\s/g, ''))}
          <img
            src= {`https://starwars-visualguide.com/assets/img/characters/${(item.url).replace(/[^0-9]/g,'')}.jpg`}
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
          peoples.length< 82 ? (
            <Button type="button" fullWidth aria-label={'VIEW MORE'} onClick={handleAddActors} className={'view__button'} variant="outlined" endIcon={<ArrowDownwardIcon />}> VIEW MORE </Button>
          ): (
            <Button type="button" fullWidth aria-label={'BACK TO TOP'} onClick={handleScrollTop} className={'view__button'} variant="outlined" endIcon={<ArrowUpwardIcon />}> BACK TO TOP </Button>
          )
        }
  
      </>
    </Container> 
  )
}

export default Peoples;