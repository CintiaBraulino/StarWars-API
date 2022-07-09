import { Box, Typography } from "@mui/material"
import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";
import getData from "../../services/axios-config";
import { peoplePaylopadResponse } from "../../services/people/PeopleService";
import { style } from './style'

export type ModalProps = {
  url:string;
}

const modalDetails: FC<ModalProps> = ({url}) =>  {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [details, setDetails] = useState<peoplePaylopadResponse>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const sourceRef = useRef(axios.CancelToken.source())

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const source = sourceRef.current
    const getActor = async () => {
      const dataActor = await getData(url)
      {console.log(url)}
      setDetails(dataActor)
    }
    getActor()
  })
  
  return(
    <Box sx={style}>
      {
        details && (
          <div className="details">
            <h3>{details.name}</h3>
          </div>
        )
      }
      
  </Box>
  )  
}

export default modalDetails