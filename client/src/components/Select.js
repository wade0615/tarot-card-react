import React, { useState } from "react";
import styled from "styled-components";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Wrapper = styled.section`
  position: relative;
  color: #878787;
`;

function Selecter({ options, onSelect, placeholder }) {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <Wrapper className="mb-4">
      <FormControl fullWidth size="small">
        <Select
          id="selecter"
          value={selected}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => {
            if (selected === "") {
              return <em>{placeholder}</em>;
            }

            return options.filter((option) => option.value === selected)[0]
              .label;
          }}
        >
          {options?.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
}

export default Selecter;
