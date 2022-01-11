import React, { useState } from 'react';
import styled from "styled-components";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const StyleNav = styled.section`
  position: sticky;
  top: 0;
  left: 0;
  color: #878787;
  z-index: 1;
`

function Nav() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyleNav className="flex justify-center bg-slate-200">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="「劃個半圓向下揮！」" />
        <Tab value="two" label="《標準咒語，第四級》" />
      </Tabs>
    </StyleNav>
  );
}

export default Nav;
