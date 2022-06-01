
import { IClass } from 'models/IClass';

import ClassLayout from '@components/ClassLayout';
import { Button } from '@components/Button';
import {
  ButtonContainer,
  DescriptionContainer,
  DetailsContainer,
  VideoContainer,
} from './styles';
import ArrowBack from '@public/arrow-back.svg';
import ArrowFoward from '@public/arrow-foward.svg';


interface ILessonTemplateProps {
  lesson: IClass;
}

export default function LessonTemplate({ lesson }: ILessonTemplateProps) {
  
  return (
    <ClassLayout route='/aulas'>
      <VideoContainer>
        <iframe
          width='100%'
          height='100%'
          src={lesson.details.video}
          title='YouTube video player'
        ></iframe>
      </VideoContainer>
      <DescriptionContainer>
        <h1>{lesson.title}</h1>
        <DetailsContainer>
          <span>Aula {lesson.classNumber}</span>
          <span>{lesson.time} min</span>
        </DetailsContainer>
        <p>
          {lesson.details.description}
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
