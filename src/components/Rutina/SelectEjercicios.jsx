import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

SelectEjercicios.propTypes = {
  data: PropTypes.array,
  field: PropTypes.object,
};
export function SelectEjercicios({ field, data }) {
  return (
    <>
      <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
        <InputLabel id='ejercicios'>Ejercicios</InputLabel>
        <Select
          {...field}
          labelId='ejercicio'
          label='ejercicio'
          defaultValue=''
          value={field.value}
        >
          {data &&
            data.map((ejercicios) => (
              <MenuItem key={ejercicios.idEjercicio} value={ejercicios.idEjercicio}>
                {ejercicios.nombreEjercicio} 
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
