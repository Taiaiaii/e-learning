
import { IClass } from 'models/IClass';

import ArrowBack from '@public/arrow-back.svg';
import ArrowFoward from '@public/arrow-foward.svg';
import ClassLayout from '@components/ClassLayout';
import { Button } from '@components/Button';
import {
  ButtonContainer,
  DescriptionContainer,
  DetailsContainer,
  VideoContainer,
} from './styles';


interface ILessonTemplateProps {
  lesson: IClass;
}

export default function LessonTemplate({ lesson }: ILessonTemplateProps) {
  
  return (
    <ClassLayout route='/aulas'>
      <VideoContainer>
        <iframe
          src={lesson.details.video}
          title='YouTube video player'
        ></iframe>
      </VideoContainer>
      <DescriptionContainer>
        <div>
          <h1>{lesson.title}</h1>
          <DetailsContainer>
            <span>Aula {lesson.classNumber}</span>
            <span>{lesson.time} min</span>
          </DetailsContainer>
          <p>{lesson.details.description}</p>
        </div>
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
      </DescriptionContainer>
    </ClassLayout>
  );
}
