import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

SelectServicios.propTypes = {
  data: PropTypes.array,
  field: PropTypes.object,
};
export function SelectServicios({ field, data }) {
  return (
    <>
      <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
        <InputLabel id='servicios'>Servicios</InputLabel>
        <Select
          {...field}
          labelId='servicios'
          label='servicios'
          defaultValue=''
          value={field.value}
        >
          {data &&
            data.map((servicios) => (
              <MenuItem key={servicios.idServicio} value={servicios.idServicio}>
                {servicios.nombreServicio}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
