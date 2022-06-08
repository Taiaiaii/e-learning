import { MouseEvent } from 'react';
import { useRouter } from 'next/router';

import ClassCard from '@components/ClassCard';
import ClassLayout from '@components/ClassLayout';
import { useCategories } from '@hooks/useCategories';
import { ICategory, ICourse } from '@models';
import { CardContainer, Content, Title } from './styles';

interface IClassesTemplateProps {
  category: ICategory;
  classes: ICourse[];
}

export function ClassesTemplate({ category, classes }: IClassesTemplateProps) {
  const { push } = useRouter();
  const { addSavedCategory } = useCategories();

  const goToLesson = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id;
    push(`aulas/${id}`);
  };

  function handleClickLike(id: string) {
    addSavedCategory(id);
    push('/salvos');
  }

  return (
    <ClassLayout handleClick={() => handleClickLike(category.id)}>
      <Title>
        <h1>{category.name}</h1>
        <p>{category.lessons} aulas</p>
      </Title>
      <Content>
        {classes.map((lesson) => (
          <CardContainer key={lesson.id}>
            <ClassCard
              classNumber={lesson.classNumber}
              isConcluded={lesson.isConcluded}
              time={lesson.time}
              title={lesson.title}
              handleClick={goToLesson}
              id={lesson.id}
            />
          </CardContainer>
        ))}
      </Content>
    </ClassLayout>
  );
}
