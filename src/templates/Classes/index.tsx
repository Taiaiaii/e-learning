import { ICategory } from 'models/ICategory';
import { IClass } from 'models/IClass';
import { useRouter } from 'next/router';

import ClassCard from '@components/ClassCard';
import ClassLayout from '@components/ClassLayout';
import { CardContainer, Content, Title } from './styles';

interface IClassesTemplateProps {
  category: ICategory;
  classes: IClass[];
}

export function ClassesTemplate({ category, classes }: IClassesTemplateProps) {
  const { push } = useRouter();

  function goToLesson(id: number) {
    push(`aulas/${id}`);
  }

  return (
    <ClassLayout route='/home'>
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
              handleClickCard={() => goToLesson(lesson.id)}
            />
          </CardContainer>
        ))}
      </Content>
    </ClassLayout>
  );
}