import { ChangeEvent, MouseEvent } from 'react';
import { useRouter } from 'next/router';

import { ICategory } from '@models';
import CategoryLayout from '@components/CategoryLayout';
import CategoryCard from '@components/CategoryCard';
import DeleteComponent from '@components/DeleteComponent';
import { useCategories } from '@hooks/useCategories';
import { CardContainer, Content, Title } from './styles';

interface IMyCoursesTemplateProps {
  categories: ICategory[];
}

export function SavedCategoriesTemplate({
  categories,
}: IMyCoursesTemplateProps) {
  const { deleteCategory, searchSavedCategories } = useCategories();

  const { push } = useRouter();

  function handleClickCard(event: MouseEvent<HTMLDivElement>) {
    const id = event.currentTarget.id;
    push(`categorias/${id}`);
  }

  function handleDelete(event: MouseEvent<HTMLButtonElement>) {
    const id = event.currentTarget.id;
    deleteCategory(id);
  }

  function setList(e: ChangeEvent<HTMLInputElement>){
    searchSavedCategories(e.target.value)
  }

  return (
    <CategoryLayout handleSearchBar={setList}>
      <Title>
        <h1>Cursos salvos</h1>
      </Title>
      <Content>
        {categories.map((category) => {
          return (
            <CardContainer key={category.id}>
              <CategoryCard
                img={category.img}
                lessons={category.lessons}
                title={category.name}
                deleteIcon={
                  <DeleteComponent
                    handleDelete={handleDelete}
                    id={category.id}
                  />
                }
                handleClick={handleClickCard}
                id={category.id}
              />
            </CardContainer>
          );
        })}
      </Content>
    </CategoryLayout>
  );
}
