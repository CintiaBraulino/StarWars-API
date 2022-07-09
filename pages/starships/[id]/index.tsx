import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import CardStarships from "../../../components/Card/CardStarships";
import getData from "../../../services/axios-config";
import { starshipsPayloadResponse } from "../../../services/starships/StarshipsService";


const FilmsDetails: FC = () =>  {
    const router = useRouter();
    const [details, setDetails] = useState<starshipsPayloadResponse>();
  
    useEffect(() => {
      const getActor = async () => {
        const dataActor = await getData(`https://swapi.dev/api/starships/${router.query.id}/`)
        setDetails(dataActor)
      }
      getActor()
    })
    
    return(
      <Box>
        {
          details && (
            <div className="details">
              <CardStarships starships={details} />
            </div>
          )
        }
        
    </Box>
    )  
  }
export default FilmsDetails;