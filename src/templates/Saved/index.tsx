import { useRouter } from 'next/router';

import { ICategory } from '@models/ICategory';
import CategoryLayout from '@components/CategoryLayout';
import CategoryCard from '@components/CategoryCard';
import DeleteComponent from '@components/DeleteComponent';
import { useCategories } from '@hooks/useCategories';
import { CardContainer, Content, Title } from './styles';

interface IMyCoursesTemplateProps {
  categories: ICategory[];
}

export function SavedCategoriesTemplate({ categories }: IMyCoursesTemplateProps) {

  const { deleteCategory} = useCategories()
   const { push } = useRouter();
   function handleClickCard(id: string) {
     push(`categorias/${id}`);
   }

  return (
    <CategoryLayout>
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
                deleteIcon={<DeleteComponent handleDelete={()=> deleteCategory(category.id)}/>}
                handleClick={()=> handleClickCard(category.id)}
              />
            </CardContainer>
          );
        })}
      </Content>
    </CategoryLayout>
  );
}
