import Logo from '@public/e.learning-logo.svg'
import { Dot, DotContainer, LoadingContainer } from './styles';

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
