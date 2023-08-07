import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL+"servicios"

class ServiciosService{
    //Definición para Llamar al API y obtener el listado de peliculas
    //localhost:81/api/movie
    obtenerServicios(){
        return axios.get(BASE_URL);
    }
    //localhost:81/api/movie/1
    obtenerServiciosPorId(idServicio){
        return axios.get(BASE_URL + '/' + idServicio);
    }
    crearServicio(Servicio){
        return axios.post(BASE_URL, Servicio);
    }

    obtenerServicioFormPorId(idServicio){
        return axios.get(BASE_URL + '/getForm/' + idServicio);
    }

    actualizarServicio(Servicio){
        return axios.put(BASE_URL, Servicio);
    }
}

export default new ServiciosService()