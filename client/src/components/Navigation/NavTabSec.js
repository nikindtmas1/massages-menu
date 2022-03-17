import * as React from 'react';
import {Link} from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '130%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="About us"
          wrapped
          to='/' component={Link}
        />
        <Tab value="two" label="Services" to="/services" component={Link} />
        <Tab value="three" label="Therapies" to="/bodyTreatments" component={Link} />
      </Tabs>
    </Box>
  );
}


{/* <Tabs onChange={this.changeTab} value={value}>
   <Tab value={0} label="first" containerElement={<Link to="/first"/>} />
   <Tab value={1} label="second" containerElement={<Link to="/second"/>}/>
   <Tab value={2} label="third" containerElement={<Link to="/third"/>} />
 </Tabs> */}