import { useRouter } from 'next/router';

import { ICategory } from '@models/ICategory';
import { IClass } from '@models/IClass';
import ClassCard from '@components/ClassCard';
import ClassLayout from '@components/ClassLayout';
import { CardContainer, Content, Title } from './styles';
import { useCategories } from '@hooks/useCategories';

interface IClassesTemplateProps {
  category: ICategory;
  classes: IClass[];
}

export function ClassesTemplate({ category, classes }: IClassesTemplateProps) {
  const { push } = useRouter();
  const { addCategory } = useCategories();

  function goToLesson(id: number) {
    push(`aulas/${id}`);
  }

  function handleClickLike(id: string) {
      addCategory(id);
      push('/meuscursos');
 
  }

  return (
    <ClassLayout route='/home' handleClick={()=>handleClickLike(category.id)}>
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
