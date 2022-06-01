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
  const {push, query } = useRouter();
  
  console.log(query)
 
  return (
    <ClassLayout route='/home'>
      <Title>
        <h1>{category.name}</h1>
        <p>{category.lessons} aulas</p>
      </Title>
      <Content>
        {classes.map((lesson) => {
          return (
            <CardContainer key={lesson.id}>
              <ClassCard
                classNumber={lesson.classNumber}
                isConcluded={lesson.isConcluded}
                time={lesson.time}
                title={lesson.title}
                handleClickCard={() => {
                  push(`aulas/${lesson.id}`)
                }}
              />
            </CardContainer>
          );
        })}
      </Content>
    </ClassLayout>
  );
}
