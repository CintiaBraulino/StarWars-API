import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import CardSpecies from "../../../components/Card/CardSpecies";
import getData from "../../../services/axios-config";
import { speciesPayloadResponse } from "../../../services/species/SpeciesService";


const FilmsDetails: FC = () =>  {
    const router = useRouter();
    const [details, setDetails] = useState<speciesPayloadResponse>();
  
    useEffect(() => {
      const getActor = async () => {
        const dataActor = await getData(`https://swapi.dev/api/species/${router.query.id}/`)
        setDetails(dataActor)
      }
      getActor()
    })
    
    return(
      <Box>
        {
          details && (
            <div className="details">
               <CardSpecies species={details} />
            </div>
          )
        }
        
    </Box>
    )  
  }
export default FilmsDetails;