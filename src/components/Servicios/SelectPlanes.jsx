import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

SelectPlanes.propTypes = {
  data: PropTypes.array,
  field: PropTypes.object,
};
export function SelectPlanes({ field, data }) {
  return (
    <>
      <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
        <InputLabel id='planes'>Planes</InputLabel>
        <Select
          {...field}
          labelId='planes'
          label='planes'
          defaultValue=''
          value={field.value}
        >
          {data &&
            data.map((planes) => (
              <MenuItem key={planes.idPlan} value={planes.idPlan}>
                {planes.nombrePlan}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
