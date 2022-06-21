import { ChangeEventHandler } from 'react';

import { Div, StyledInput } from './styles';

interface ISearchBarProps {
  handleInput: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBar({ handleInput }: ISearchBarProps) {
  return (
    <Div>
      <StyledInput
        type='text'
        placeholder='Busque um curso'
        onChange={handleInput}
      />
    </Div>
  );
}
