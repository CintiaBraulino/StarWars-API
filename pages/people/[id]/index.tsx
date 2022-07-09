import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import CardPeople from "../../../components/Card/CardPeople";
import getData from "../../../services/axios-config";
import { peoplePayloadResponse } from "../../../services/people/PeopleService";


const PeopleDetails: FC = () =>  {
    const router = useRouter();
    const [details, setDetails] = useState<peoplePayloadResponse>();
  
    useEffect(() => {
      const getActor = async () => {
        const dataActor = await getData(`https://swapi.dev/api/people/${router.query.id}/`)
        setDetails(dataActor)
      }
      getActor()
    })
    
    return(
      <Box>
        {details && (
          <div className="details">
            <CardPeople people={details} />
          </div>
        )}
      </Box>
    )  
  }
export default PeopleDetails;