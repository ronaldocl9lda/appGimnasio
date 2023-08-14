import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL+"fotos"

class FotosService {

    obtenerFotos(){
        return axios.get(BASE_URL);
    }

    obtenerFotosPorId(FotoId){
        return axios.get(BASE_URL + '/' + FotoId);
    }
}

export default new FotosService()
