import { useRouter } from 'next/router';

import ArrowBack from '@public/arrow-back.svg';
import ArrowFoward from '@public/arrow-foward.svg';
import { IClazz } from '@models';
import ClassLayout from '@components/ClassLayout';
import { Button } from '@components/Button';
import {
  ButtonContainer,
  DescriptionContainer,
  DetailsContainer,
  VideoContainer,
} from './styles';
import { useCategories } from '@hooks/useCategories';

interface ILessonTemplateProps {
  clazz: IClazz;
}

export default function ClazzTemplate({ clazz }: ILessonTemplateProps) {
  const {
    query: { id },
    push,
  } = useRouter();

  const { classes } = useCategories();

  function handleClickArrowBack() {
    const newId = Number(id) - 1;
    if (newId > 0) {
      push(`${newId}`);
    }
  }

  function handleClickArrowFoward() {
    const newId = Number(id) + 1;
    if(classes){
      if (newId <= classes?.length) {
        push(`${newId}`);
      } else {
        push('/home');
      }
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
          >
            <ArrowBack />
            Aula anterior
          </Button>
          <Button
            iconSide='right'
            variant='filled'
            onClick={handleClickArrowFoward}
          >
            <ArrowFoward />
            Próxima aula
          </Button>
        </ButtonContainer>
      </DescriptionContainer>
    </ClassLayout>
  );
}
