import { useRouter } from 'next/router';

import { ChangeEvent, MouseEvent } from 'react';

import { ICategory } from '@models';
import CategoryLayout from '@components/CategoryLayout';
import CategoryCard from '@components/CategoryCard';
import { CardContainer, Content, Title } from './styles';
import { useCategories } from '@hooks/useCategories';

interface IHomeTemplateProps {
  categorys: ICategory[];
}

export function HomeTemplate({ categorys }: IHomeTemplateProps) {
  const { push } = useRouter();
  const { searchAllCategories } = useCategories();

  function handleClickCard(event: MouseEvent<HTMLDivElement>) {
    const id = event.currentTarget.id;
    push(`categorias/${id}`);
  }
  function setList(e: ChangeEvent<HTMLInputElement>) {
    searchAllCategories(e.target.value);
  }

  return (
    <CategoryLayout handleSearchBar={setList}>
      <Title>
        <h1>Categorias</h1>
        <p>{categorys.length} cursos</p>
      </Title>
      <Content>
        {categorys.map((category) => (
          <CardContainer key={category.id}>
            <CategoryCard
              img={category.img}
              lessons={category.lessons}
              title={category.name}
              handleClick={handleClickCard}
              id={category.id}
            />
          </CardContainer>
        ))}
      </Content>
    </CategoryLayout>
  );
}
