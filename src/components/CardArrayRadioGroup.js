import styled from "styled-components";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CardArrayRadioGroup = styled.section`
  position: relative;
  color: #878787;
`

function cardArrayRadioGroup() {
  return (
    <CardArrayRadioGroup>
      <FormControl component="fieldset">
        <FormLabel component="legend">選取你的牌陣</FormLabel>
        <RadioGroup
          aria-label="gender"
          defaultValue="single"
          name="radio-buttons-group"
        >
          <FormControlLabel value="single" control={<Radio />} label="單牌結果" />
          <FormControlLabel value="treble" control={<Radio />} label="三牌時間流" />
          <FormControlLabel value="penta" control={<Radio />} label="五牌時間流" />
          <FormControlLabel value="celticCross" control={<Radio />} label="凱爾特十字" />
        </RadioGroup>
      </FormControl>
    </CardArrayRadioGroup>
  );
}

export default cardArrayRadioGroup;
