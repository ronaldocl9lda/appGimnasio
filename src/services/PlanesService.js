import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL+"planes"

class PlanesService{
    //Definición para Llamar al API y obtener el listado de peliculas
    //http://localhost:81/apiGimnasio/ejercicio
    obtenerPlanes(){
        return axios.get(BASE_URL);
    }
    //http://localhost:81/apiGimnasio/ejercicios/1
    obtenerPlanesPorId(idPlan){
        return axios.get(BASE_URL + '/' + idPlan);
    }
    crearPlan(Plan){
        return axios.post(BASE_URL, Plan);
    }

    obtenerEjercicioFormPorId(idEjercicio){
        return axios.get(BASE_URL + '/getForm/' + idEjercicio);
    }

    actualizarEjercicio(Ejercicio){
        return axios.put(BASE_URL, Ejercicio);
    }
}

export default new PlanesService()