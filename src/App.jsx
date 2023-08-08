import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { Home } from './components/Home/Home'
import { DetailMovie } from './components/Movie/DetailMovie'
import TableMovies from './components/Movie/TableMovies'
import TablaServicios from './components/Servicios/TablaServicios'
//import TablaServicios from './components/Servicios/TablaServicios'
import { FormMovie } from './components/Movie/FormMovie'
import {ListaEjercicios} from './components/Rutina/ListaEjercicios'
import {ListaRutinas} from './components/Rutina/ListaRutinas'
import { DetailEjercicios } from './components/Rutina/DetailEjercicios'
import {ListaActividades} from './components/Actividades/ListaActividades'
import { ListaPlanes } from './components/Planes/ListaPlanes'
import { DetailPlan } from './components/Planes/DetailPlan'
import { DetailRutina } from './components/Rutina/DetailRutina'
import { DetailActividadesGrupales } from './components/Actividades/DetailActividadesGrupales';
import { DetailServicios } from './components/Servicios/DetailServicios'
import TablaRutinas from './components/Rutina/TablaRutinas'
import { FormRutina } from './components/Rutina/FormRutina'
import { ListaServicios } from './components/Servicios/ListaServicios'
import TablaEjercicios from './components/Rutina/TablaEjercicios'
import TablaPlanes from './components/Planes/TablaPlanes'
import TablaActividades from './components/Actividades/TablaActividades'
import { FormPlanes } from './components/Planes/FormPlanes'
import { FormEjercicios } from './components/Rutina/FormEjercicios'
import { FormServicios } from './components/Servicios/FormServicios'
import { FormActividades } from './components/Actividades/FormActividades'
//import { FormServicios } from './components/Servicios/FormServicios'

const router=createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
//Ejercicios
  {
    path:'/ejercicios/',
    element: <ListaEjercicios />
  },
  {
    path:'/ejercicios/:idEjercicio',
    element: <DetailEjercicios />
  },
  {
    path:'/ejercicios-table',
    element: <TablaEjercicios />
  },
  {
    path: 'ejercicios/create/',
    element: <FormEjercicios/>
  },
  {
    path: 'ejercicios/update/:idEjercicio',
    element: <FormEjercicios/>
  },
  //Planes
  {
    path:'/planes/',
    element: <ListaPlanes />
  },
  {
    path:'/planes/:idPlan',
    element: <DetailPlan />
  },
  {
    path:'/planes-table',
    element: <TablaPlanes />
  },
  {
    path: 'planes/create/',
    element: <FormPlanes/>
  },
  {
    path: 'planes/update/:idPlan',
    element: <FormPlanes/>
  },
  //Rutinas
  {
    path:'/rutinas/',
    element: <ListaRutinas />
  },
  {
    path:'/rutinas/:idRutina',
    element: <DetailRutina />
  },
  {
    path:'/rutinas-table',
    element: <TablaRutinas />
  },
  {
    path: 'rutinas/create/',
    element: <FormRutina/>
  },
  {
    path: 'rutinas/update/:idRutina',
    element: <FormRutina/>
  },
  //Actividades Grupales
  {
    path:'/actividadesGrupales/',
    element: <ListaActividades />
  },
  {
    path:'/actividadesGrupales/:idActividad',
    element: <DetailActividadesGrupales />
  },
  {
    path:'/actividadesGrupales-table',
    element: <TablaActividades />
  },
  {
    path: 'actividadesGrupales/create/',
    element: <FormActividades/>
  },
  {
    path: 'actividadesGrupales/update/:idActividad',
    element: <FormActividades/>
  },
  //Peliculas
  {
    path:'/movie-table',
    element: <TableMovies />
  },
  {
    path: 'movie/create/',
    element: <FormMovie/>
  },
  {
    path:'/movie/:id',
    element: <DetailMovie />
  },
  {
    path: 'movie/update/:id',
    element: <FormMovie/>
  },
  // Servicios
  {
    path:'/servicios/',
    element: <ListaServicios />
  },
  {
    path:'/servicios/:idServicio',
    element: <DetailServicios />
  },
  {
    path:'/servicios-table',
    element: <TablaServicios />
  },
  {
    path:'/servicios/create',
    element: <FormServicios />
  },
  {
    path:'/servicios/update:idServicio',
    element: <FormServicios />
  },/*
  {
    path: 'servicios/create/',
    element: <FormServicios/>
  },
  {
    path: 'servicios/update/:idServicio',
    element: <FormServicios/>
  },*/
  // Fotos
  /*{
    path:'/fotos/',
    element: <ListaFotos />
  },
  {
    path:'/fotos/:idFoto',
    element: <DetailServicios />
  }*/
])

function App() {
 
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  )
}

export default App
