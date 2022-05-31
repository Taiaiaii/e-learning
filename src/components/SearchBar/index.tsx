import React from 'react';

import { Div, StyledInput } from './styles';


export default function SearchBar() {
  return (
    <Div>
      <StyledInput type='text' placeholder='Busque um curso'/>
    </Div>
  );
}
