import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import CardVehicles from "../../../components/Card/CardVehicles";
import getData from "../../../services/axios-config";
import { vehiclesPayloadResponse } from "../../../services/vehicles/VehiclesService";


const FilmsDetails: FC = () =>  {
    const router = useRouter();
    const [details, setDetails] = useState<vehiclesPayloadResponse>();
  
    useEffect(() => {
      const getActor = async () => {
        const dataActor = await getData(`https://swapi.dev/api/vehicles/${router.query.id}/`)
        setDetails(dataActor)
      }
      getActor()
    })
    
    return(
      <Box>
        {
          details && (
            <div className="details">
            <CardVehicles vehicles={details} />
            </div>
          )
        }
        
    </Box>
    )  
  }
export default FilmsDetails;