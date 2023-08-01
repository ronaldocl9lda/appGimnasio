import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL+"ejercicios"

class EjerciciosService{
    //Definición para Llamar al API y obtener el listado de peliculas
    //http://localhost:81/apiGimnasio/ejercicio
    obtenerEjercicios(){
        return axios.get(BASE_URL);
    }
    //http://localhost:81/apiGimnasio/ejercicios/1
    obtenerEjerciciosPorId(idEjercicio){
        return axios.get(BASE_URL + '/' + idEjercicio);
    }
    crearEjercicio(Ejercicio){
        return axios.post(BASE_URL, Ejercicio);
    }

    obtenerEjercicioFormPorId(idEjercicio){
        return axios.get(BASE_URL + '/getForm/' + idEjercicio);
    }

    actualizarEjercicio(Ejercicio){
        return axios.put(BASE_URL, Ejercicio);
    }
}

export default new EjerciciosService()