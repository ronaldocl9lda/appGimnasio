import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

SelectRutina.propTypes = {
  data: PropTypes.array,
  field: PropTypes.object,
};
export function SelectRutina({ field, data }) {
  return (
    <>
      <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
        <InputLabel id='rutinas'>Rutinas</InputLabel>
        <Select
          {...field}
          labelId='rutinas'
          label='rutinas'
          defaultValue=''
          value={field.value}
        >
          {data &&
            data.map((rutinas) => (
              <MenuItem key={rutinas.idRutina} value={rutinas.idRutina}>
                {rutinas.nombre} 
                {console.log("Probando")}
                {console.log(rutinas)}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
