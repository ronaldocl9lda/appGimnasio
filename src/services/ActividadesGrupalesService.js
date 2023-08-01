import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL+"actividadesGrupales"

class ActividadesGrupalesService{
    //Definición para Llamar al API y obtener el listado de peliculas
    //http://localhost:81/apiGimnasio/ejercicio
    obtenerActividad(){
        return axios.get(BASE_URL);
    }
    //http://localhost:81/apiGimnasio/ejercicios/1
    obtenerActividadPorId(idActividad){
        return axios.get(BASE_URL + '/' + idActividad);
    }
    crearActividad(Actividad){
        return axios.post(BASE_URL, Actividad);
    }

    obtenerActividadFormPorId(idActividad){
        return axios.get(BASE_URL + '/getForm/' + idActividad);
    }

    actualizarActividad(Actividad){
        return axios.put(BASE_URL, Actividad);
    }
}

export default new ActividadesGrupalesService()