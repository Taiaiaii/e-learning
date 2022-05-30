import { Div, StyledInput } from './styles';
import Search from '../../public/search.svg';

export default function SearchBar() {
  return (
    <Div>
      <StyledInput type='text' placeholder='Busque um curso'/>
    </Div>
  );
}
