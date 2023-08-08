import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

SelectDetalles.propTypes = {
  data: PropTypes.array,
  field: PropTypes.object,
};
export function SelectDetalles({ field, data }) {
  return (
    <>
      <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
        <InputLabel id='detalles'>Detalles</InputLabel>
        <Select
          {...field}
          labelId='detalles'
          label='detalles'
          defaultValue=''
          value={field.value}
        >
          {data &&
            data.map((detalles) => (
              <MenuItem key={detalles.idServicio} value={detalles.idServicio}>
                {detalles.nombreServicio}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
