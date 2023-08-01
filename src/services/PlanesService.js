import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL+"planes"

class PlanesService{
    //Definición para Llamar al API y obtener el listado de peliculas
    //http://localhost:81/apiGimnasio/planes
    obtenerPlanes(){
        return axios.get(BASE_URL);
    }
    //http://localhost:81/apiGimnasio/planes/1
    obtenerPlanesPorId(idPlan){
        return axios.get(BASE_URL + '/' + idPlan);
    }
    crearPlan(Plan){
        return axios.post(BASE_URL, Plan);
    }

    obtenerPlanFormPorId(idPlan){
        return axios.get(BASE_URL + '/getForm/' + idPlan);
    }

    actualizarPlan(Plan){
        return axios.put(BASE_URL, Plan);
    }
}

export default new PlanesService()