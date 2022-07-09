import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import CardFilms from "../../../components/Card/CardFilms";
import getData from "../../../services/axios-config";
import { filmsPayloadResponse } from "../../../services/films/FilmsService";


const FilmsDetails: FC = () =>  {
    const router = useRouter();
    const [details, setDetails] = useState<filmsPayloadResponse>();
  
    useEffect(() => {
      const getActor = async () => {
        const dataActor = await getData(`https://swapi.dev/api/films/${router.query.id}/`)
        setDetails(dataActor)
      }
      getActor()
    })
    
    return(
      <Box>
        {
          details && (
            <div className="details">
              <CardFilms films={details} />
            </div>
          )
        }
        
    </Box>
    )  
  }
export default FilmsDetails;