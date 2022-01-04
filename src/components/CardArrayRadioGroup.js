import React, { useState } from 'react';
import styled from "styled-components";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const StyleCardArrayRadioGroup = styled.section`
  position: relative;
  color: #878787;
`

function CardArrayRadioGroup(props) {
  const [value, setValue] = useState('single');

  const valueChange = (event) => {
    setValue(event.target.value);
    props.handleChange(event.target.value);
  };

  return (
    <StyleCardArrayRadioGroup>
      <FormControl component="fieldset">
        <FormLabel component="legend">選取你的牌陣</FormLabel>
        <RadioGroup
          aria-label="gender"
          value={value}
          onChange={valueChange}
          name="radio-buttons-group"
        >
          <FormControlLabel value="single" control={<Radio />} label="單牌結果" />
          <FormControlLabel value="treble" control={<Radio />} label="三牌時間流" />
          <FormControlLabel value="penta" control={<Radio />} label="五牌時間流" disabled />
          <FormControlLabel value="celticCross" control={<Radio />} label="凱爾特十字" disabled />
        </RadioGroup>
      </FormControl>
    </StyleCardArrayRadioGroup>
  );
}

export default CardArrayRadioGroup;
