import { errorInterceptor } from './../../pages/api/interceptors/ErrorInterceptor';
import { responseInterceptor } from './../../pages/api/interceptors/ResponseInterceptor';
import axios from "axios";

const api = axios.create({
    baseURL:"https://swapi.dev/api/"
});

api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export {api};

const getData = async (url: string) => {
    try {
      const res = await axios.get(url)
      const result = await res.data
      return result
    } catch (err) {
      if (axios.isCancel(err)) console.log('axios cancel');
      else console.log(err);
    }
  }
  
export default getData;

