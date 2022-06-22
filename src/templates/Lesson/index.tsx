import { useRouter } from 'next/router';

import ArrowBack from '@public/arrow-back.svg';
import ArrowFoward from '@public/arrow-foward.svg';
import { ICourse } from '@models';
import ClassLayout from '@components/ClassLayout';
import { Button } from '@components/Button';
import { useCategories } from '@hooks/useCategories';
import {
  ButtonContainer,
  DescriptionContainer,
  DetailsContainer,
  VideoContainer,
} from './styles';


interface ILessonTemplateProps {
  lesson: ICourse;
}

export default function LessonTemplate({ lesson }: ILessonTemplateProps) {
  const {
    query: { id: queryId },
    push,
  } = useRouter();

  const { classes } = useCategories();

  const id = Number(queryId)

  const isArrowBackDisabled = id === 1
  const isArrowFowardDisabled = id === classes?.length;

  function handleClickArrowBack() {
    const newId = id - 1;
    
    if (newId > 0) {
      push(`${newId}`);
    }
  }

  function handleClickArrowFoward() {
    const newId = id + 1;
    if (!classes) return;

    if (newId <= classes.length) {
      push(`${newId}`);
    }
  }

  return (
    <ClassLayout>
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
          <Button
            iconSide='left'
            variant='ghost'
            onClick={handleClickArrowBack}
            disabled={isArrowBackDisabled}
          >
            <ArrowBack />
            Aula anterior
          </Button>
          <Button
            iconSide='right'
            variant='filled'
            onClick={handleClickArrowFoward}
            disabled={isArrowFowardDisabled}
          >
            <ArrowFoward />
            Próxima aula
          </Button>
        </ButtonContainer>
      </DescriptionContainer>
    </ClassLayout>
  );
}
