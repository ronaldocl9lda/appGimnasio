import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL+"rutinas"

class RutinaService{
    //Definición para Llamar al API y obtener el listado de peliculas
    //localhost:81/api/movie
    obtenerRutinas(){
        return axios.get(BASE_URL);
    }
    //localhost:81/api/movie/1
    obtenerRutinasPorId(RutinaId){
        return axios.get(BASE_URL + '/' + RutinaId);
    }
    createRutina(Rutina){
        return axios.post(BASE_URL, Rutina);
    }

    obtenerRutinaFormPorID(RutinaId){
        return axios.get(BASE_URL + '/getForm/' + RutinaId);
    }

    updateRutina(Rutina){
        return axios.put(BASE_URL, Rutina);
    }
}

export default new RutinaService()