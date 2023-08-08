import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL+"detalleActividad"

class DetalleActividadService{
    //Definición para Llamar al API y obtener el listado de peliculas
    //http://localhost:81/apiGimnasio/ejercicio
    obtenerDetalle(){
        return axios.get(BASE_URL);
    }
    //http://localhost:81/apiGimnasio/ejercicios/1
    obtenerDetalledPorId(idDetalle){
        return axios.get(BASE_URL + '/' + idDetalle);
    }
    crearDetalle(Detalle){
        return axios.post(BASE_URL, Detalle);
    }

    obtenerActividadFormPorId(idDetalle){
        return axios.get(BASE_URL + '/getForm/' + idDetalle);
    }

    actualizarActividad(Detalle){
        return axios.put(BASE_URL, Detalle);
    }
}

export default new DetalleActividadService()