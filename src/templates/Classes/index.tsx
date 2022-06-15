import { MouseEvent } from 'react';
import { useRouter } from 'next/router';

import ClassCard from '@components/ClassCard';
import ClassLayout from '@components/ClassLayout';
import { useCategories } from '@hooks/useCategories';
import { ICategory, IClazz } from '@models';
import { CardContainer, Content, Title } from './styles';

interface IClassesTemplateProps {
  category: ICategory;
  classes: IClazz[];
}

export function ClassesTemplate({ category, classes }: IClassesTemplateProps) {
  const { push } = useRouter();
  const { addCategory } = useCategories();

  const goToClazz = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id;
    push(`aulas/${id}`);
  };

  function handleClickLike(id: string) {
      addCategory(id);
      push('/saved');
  }

  return (
    <ClassLayout handleClick={() => handleClickLike(category.id)}>
      <Title>
        <h1>{category.name}</h1>
        <p>{category.lessons} aulas</p>
      </Title>
      <Content>
        {classes.map((clazz) => (
          <CardContainer key={clazz.id}>
            <ClassCard
              classNumber={clazz.classNumber}
              isConcluded={clazz.isConcluded}
              time={clazz.time}
              title={clazz.title}
              handleClick={goToClazz}
              id={clazz.id}                           
            />
          </CardContainer>
        ))}
      </Content>
    </ClassLayout>
  );
}
