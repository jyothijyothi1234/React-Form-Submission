
import React, { useState } from 'react';

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const RadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  console.log(selectedValue)

  return (
    <RadioGroup value={selectedValue} onChange={handleChange}>
      <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
      <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
    </RadioGroup>
  );
};

export default RadioButtons;
