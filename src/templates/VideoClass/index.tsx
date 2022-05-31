import ClassLayout from '@components/ClassLayout';
import { Button } from '@components/Button';
import { ButtonContainer, DescriptionContainer, DetailsContainer, VideoContainer } from './styles';
import ArrowBack from '@public/arrow-back.svg'
import ArrowFoward from '@public/arrow-foward.svg'

export default function VideoClassTemplate() {
  return (
    <ClassLayout route='/aulas'>
      <VideoContainer>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/ddZHkCUcYRM'
          title='YouTube video player'        
        ></iframe>
      </VideoContainer>
      <DescriptionContainer>
        <h1>Introdução á teoria matemática</h1>
        <DetailsContainer>
          <span>Aula 01</span>
          <span>5 min</span>
        </DetailsContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus
          condimentum gravida. Aenean condimentum vehicula sapien, eleifend
          metus congue vel. Suspendisse vitae tellus eu lacus facilisis auctor
          nec tristique eros.
        </p>
      </DescriptionContainer>
      <ButtonContainer>
        <Button iconSide='left' variant='ghost'>
          <ArrowBack />
          Aula anterior
        </Button>
        <Button iconSide='right' variant='filled'>
          <ArrowFoward />
          Próxima aula
        </Button>
      </ButtonContainer>
    </ClassLayout>
  );
}
