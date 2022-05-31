import { Dot, DotContainer, LoadingContainer } from './styles';
import Logo from '../../public/e.learning-logo.svg'

export default function Loading() {
  return (
    <LoadingContainer>
      <Logo />
      <DotContainer>
        <Dot></Dot>
      </DotContainer>
    </LoadingContainer>
  );
}
