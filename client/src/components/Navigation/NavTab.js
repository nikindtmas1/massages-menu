import * as React from 'react';
import {Link} from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('zero');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="one"><Link to='/'>About us</Link></ToggleButton>
      <ToggleButton value="two"><Link to='/services'>Services</Link></ToggleButton>
      <ToggleButton value="three"><Link to='/bodyTreatments'>Therapies</Link></ToggleButton>
      <ToggleButton value="four"><Link to='/register'>Register</Link></ToggleButton>
      <ToggleButton value="five"><Link to='/login'>Login</Link></ToggleButton>
    </ToggleButtonGroup>
  );
}