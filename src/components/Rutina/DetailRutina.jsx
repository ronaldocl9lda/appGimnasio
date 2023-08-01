import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EjerciciosService from '../../services/EjerciciosService'
import RutinaService from '../../services/RutinaService'

export function DetailRutina () {
  const [data, setData]=useState(null);
  const [error, setError] =useState('');
  const [loaded, setLoaded] =useState(false);

  const routeParams=useParams();

  useEffect(()=>{
    RutinaService.obtenerRutinasPorId(routeParams.idRutina)
    .then( response=>{
      console.log(response)
      setData(response.data.results)
      setError(response.error)
      setLoaded(true)
    })
    .catch(error=>{
      if(error instanceof SyntaxError){
        console.log(error)
        throw new Error("Respuesta no válida del servidor")
      }
    });
  },[routeParams.idRutina]);

  return (   
    <>
      {!loaded &&<div>Cargando...</div>}
      {data && 
        <div>
          
          <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
            <Typography variant='h4' component='h1' gutterBottom>
              {data.idRutina}
            </Typography>
            <Typography variant='subtitle1' component='h1' gutterBottom>
              {data.nombre}
            </Typography>
            <Typography component='span' variant='body1'>
              <Box fontWeight='bold' display='inline'>Tipo:</Box> {data.tipo}  minutos
            </Typography>
            {/*<Typography component='span' variant='body1'>
              <Box fontWeight='bold' display='inline'>Idioma:</Box> {data.equipamento}  
            </Typography>
            <Typography component='span' variant='body1'>
              <Box fontWeight='bold'>Generos:</Box>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {data.genres.map((item)=>(  
                  <ListItemButton key={item.id}>
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon> 
                  <ListItemText primary={item.title} />
                </ListItemButton>
                ))}
              </List>
                </Typography>
            <Typography component='span' variant='body1'>
              <Box fontWeight='bold'>Actores:</Box>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                
              {data.actors.map((item)=>( 
                <ListItemButton key={item.idEjercicio}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon> 
                  <ListItemText primary={item.nombreEjercicio+" "+item.descripcion} />
                </ListItemButton>
                ))}

              </List>
            </Typography>*/}
          </Container>
        </div>
        }
    </>
  )
}
