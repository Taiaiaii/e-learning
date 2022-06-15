import { useRouter } from 'next/router';

import ArrowBack from '@public/arrow-back.svg';
import ArrowFoward from '@public/arrow-foward.svg';
import { IClazz } from '@models';
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
  clazz: IClazz;
}

export default function ClazzTemplate({ clazz }: ILessonTemplateProps) {
  const {
    query: { id },
    push,
  } = useRouter();

  const { classes } = useCategories();

  const parsedId = Number(id)
  const isArrowBackDisabled = parsedId == 1;
  const isArrowFowardDisabled = parsedId == classes?.length;

  function handleClickArrowBack() {
    const newId = Number(id) - 1;
    
    if (newId > 0) {
      push(`${newId}`);
    }
  }

  function handleClickArrowFoward() {
    const newId = Number(id) + 1;
    if (!classes) return;

    if (newId <= classes.length) {
      push(`${newId}`);
    }
  }

  return (
    <ClassLayout>
      <VideoContainer>
        <iframe
          src={clazz.details.video}
          title='YouTube video player'
        ></iframe>
      </VideoContainer>
      <DescriptionContainer>
        <div>
          <h1>{clazz.title}</h1>
          <DetailsContainer>
            <span>Aula {clazz.classNumber}</span>
            <span>{clazz.time} min</span>
          </DetailsContainer>
          <p>{clazz.details.description}</p>
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
