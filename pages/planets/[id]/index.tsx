import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import CardPlanets from "../../../components/Card/CardPlanets";
import getData from "../../../services/axios-config";
import { planetsPayloadResponse } from "../../../services/planets/PlanetsService";


const FilmsDetails: FC = () =>  {
    const router = useRouter();
    const [details, setDetails] = useState<planetsPayloadResponse>();
  
    useEffect(() => {
      const getActor = async () => {
        const dataActor = await getData(`https://swapi.dev/api/planets/${router.query.id}/`)
        setDetails(dataActor)
      }
      getActor()
    })
    
    return(
      <Box>
        {
          details && (
            <div className="details">
              <CardPlanets planets={details} />
            </div>
          )
        }
        
    </Box>
    )  
  }
export default FilmsDetails;