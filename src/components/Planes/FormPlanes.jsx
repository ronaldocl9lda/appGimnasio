// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormHelperText } from '@mui/material';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// eslint-disable-next-line no-unused-vars
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import PlanesService from '../../services/PlanesService';
import { ServiciosForm } from './ServiciosForm';

export function FormPlanes() {
  const navigate = useNavigate()
  const routeParams = useParams();
  // Id de la pelicula a actualizar
  const id = routeParams.idPlan || null;
  const esCrear = !id;
  // Valores a precarga al actualizar
  const [values, setValues] = useState(null);
  // Esquema de validación
  const planesSchema = yup.object({
    nombre: yup
      .string()
      .required('El título es requerido')
      .min(3, 'El título debe tener 3 caracteres'),
    descripcion: yup
      .string()
      .required('El título es requerido')
      .min(6, 'El título debe tener 3 caracteres'),
    precio: yup.string().required('Los minutos son requerido'),
    servicios: yup.array().typeError('Seleccione un servicio'),
  });
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    // Valores iniciales
    defaultValues: {
      idPlan: '',
      nombrePlan: '',
      descripcion: '',
      precio: '',
      servicios: [
        {
          idServicio: ''
        },
      ],
    },
    // valores a precargar
    values,
    // Asignación de validaciones
    resolver: yupResolver(planesSchema),
  });
  // useFieldArray:
  // relaciones de muchos a muchos, con más campos además
  // de las llaves primaras
  const { fields, append, remove } = useFieldArray({
    control, //controls proviene de useForm
    name: 'servicios', //nombre único para el campo Array
  });
  // Eliminar servicio ser de listado
  const removerServicio = (index) => {
    if (fields.length === 1) {
      return;
    }
    remove(index);
  };
  // Agregar un nuevo servicio
  const agregarNuevoServicio = () => {
    append({
        idServicio: ''
    });
  };
  // Valores de formulario que llena el usuario
  const [formData, setFormData] = useState(null);
  //Respuesta de crear o modificar
  const [responseData, setResponseData] = useState(null);
  // Accion: post, put
  const [action, setAction] = useState('POST');
  // Booleano para establecer si se envió la informacion al API
  const [start, setStart] = useState(false);
  // Obtener la informacion de la pelicula a actualizar
  const [data, setData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');

  // Accion submit
  const onSubmit = (DataForm) => {
    try {
      // Establecer valores del formulario
      console.log(DataForm);
      setFormData(DataForm);
      // Indicar que se puede realizar la solicitud al API
      setStart(true);
      // Establecer el tipo de métod HTTP
      if (esCrear) {
        setAction('POST');
      } else {
        setAction('PUT');
      }
    } catch (e) {
      //Capturar error
    }
  };
  //Llamar al API para ejecutar Crear o modificar
  useEffect(() => {
    if(start){
      if(esCrear){
        //Crear pelicula
        PlanesService.crearPlan(formData)
        .then(response => {
          console.log(response)
            setResponseData(response.data.results)
            setError(response.error)
        })
        .catch(error => {
          if (error instanceof SyntaxError) {
            console.log(error)
            throw new Error('Respuesta no válida del servidor')
          }
        });
      }else{
        //Modificar pelicula
        PlanesService.obtenerPlanes(formData)
        .then(response => {
          console.log(response)
            setResponseData(response.data.results)
            setError(response.error)
        })
        .catch(error => {
          if (error instanceof SyntaxError) {
            console.log(error)
            throw new Error('Respuesta no válida del servidor')
          }
        });
      }
      
    }
  }, [start,esCrear,formData]);
  // Si ocurre error al realizar el submit
  const onError = (errors, e) => console.log(errors, e);
  //Obtener Pelicula
  //Obtener Pelicula
  useEffect(() => {
    if(id!=undefined && !isNaN(Number(id))){
      PlanesService.obtenerPlanFormPorId(id)
    .then(response => {
      console.log(response)
        setData(response.data.results)
        setError(response.error)
    })
    .catch(error => {
      if (error instanceof SyntaxError) {
        console.log(error)
        throw new Error('Respuesta no válida del servidor')
      }
    });
    }
    
  }, [id]);
  //Lista de actores
  const [dataPlanes, setDataPlanes] = useState({});
  const [loadedPlanes, setLoadedPlanes] = useState(false);
  useEffect(() => {
    PlanesService.obtenerPlanes()
      .then((response) => {
        console.log(response);
        setDataPlanes(response.data.results);
        setLoadedPlanes(true);
      })
      .catch((error) => {
        if (error instanceof SyntaxError) {
          console.log(error);
          throw new Error('Respuesta no válida del servidor');
        }
      });
  }, [esCrear]);
  //Respuesta del API al crear o actualizar
  useEffect(() => {
    if (responseData != null) {
      toast.success(responseData, {
        duration: 4000,
        position: 'top-center'
      })
      // Si hay respuesta se creo o modifico lo redirecciona
      return navigate('/planes-table')
    }    
  }, [responseData])
  // Si es modificar establece los valores a precargar en el formulario
  useEffect(() => {   
    if (!esCrear && data) {
      // Si es modificar establece los valores a precargar en el formulario
      setValues(data)
      console.log(data)
    }
  }, [data, esCrear, action])
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Typography variant='h5' gutterBottom>
              {esCrear ? 'Crear' : 'Modificar'} Plan
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
              <Controller
                name='nombre'
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id='nombre'
                    label='Nombre'
                    error={Boolean(errors.nombre)}
                    helperText={errors.year ? errors.year.message : ' '}
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* ['filled','outlined','standard']. */}
            <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
              <Controller
                name='descripcion'
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id='descripcion'
                    label='Descripcion'
                    error={Boolean(errors.descripcion)}
                    helperText={errors.time ? errors.time.message : ' '}
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* ['filled','outlined','standard']. */}
            <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
              <Controller
                name='precio'
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id='precio'
                    label='Precio'
                    error={Boolean(errors.precio)}
                    helperText={errors.time ? errors.time.message : ' '}
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl variant='standard' fullWidth sx={{ m: 1 }}>

            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
              <Typography variant='h6' gutterBottom>
                Servicios
                <Tooltip title='Agregar Actor'>
                  <span>
                    <IconButton color='secondary' onClick={agregarNuevoServicio}>
                      <AddIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </Typography>
              {/* Array de controles de actor */}
              {loadedPlanes &&
                dataPlanes &&
                fields.map((field, index) => (
                  <ServiciosForm
                    field={field}
                    data={dataPlanes}
                    key={index}
                    index={index}
                    onRemove={removerServicio}
                    control={control}
                    onChange={(e) => setValue('servicios', e.target.value, { shouldValidate: true })}
                    disableRemoveButton={fields.length === 1}
                  />
                ))}
              <FormHelperText sx={{ color: '#d32f2f' }}>
                {errors.servicios ? errors.servicios.message : ' '}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              sx={{ m: 1 }}
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
