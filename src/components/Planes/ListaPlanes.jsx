import React,{ useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import AccessTime from '@mui/icons-material/AccessTime'
import Language from '@mui/icons-material/Language'
import { Link } from "react-router-dom";
import { Info } from '@mui/icons-material'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PlanesService from '../../services/PlanesService'
export function ListaPlanes () {
  const [data, setData]=useState(null);
  const [error, setError] =useState('');
  const [loaded, setLoaded] =useState(false);
  useEffect(()=>{
    PlanesService.obtenerPlanes()
    .then( response=>{
        console.log(response)
        setData(response.data.results)
        setError(response.error)
        setLoaded(true)
        
    })
    .catch(error=>{
      alert("No lee base de datos");
      if(error instanceof SyntaxError){
        console.log(error)
        throw new Error("Respuesta no válida del servidor")
      }
    });
  },[]);
  return (
    <Grid container sx={{ p: 2 }} spacing={3}>
      {!loaded && <div>Cargando...</div>}
      {data && data.map((item)=>( 
          <Grid item xs={4} key={item.idPlan}  >
            <Card>
              <CardHeader
                sx={{
                  p: 0,
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  color: (theme) => theme.palette.common.white
                }}
                style={{ textAlign: 'center' }}
                title={item.nombrePlan}
                //subheader={item.idEjercicio}
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  <SportsGymnasticsIcon /> Descripcion: {item.descripcion}   
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  <FitnessCenterIcon />   Precio: {item.precio}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{
                  backgroundColor: (theme) => theme.palette.action.focus,
                  color: (theme) => theme.palette.common.white
                }}
              >
                <IconButton component={Link} to={`/planes/${item.idPlan}`} aria-label='Detalle' sx={{ ml: 'auto' }}>
                  <Info/>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
      ))}   
    </Grid>
  )
}
