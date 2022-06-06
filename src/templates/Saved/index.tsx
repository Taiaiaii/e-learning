import { useState } from 'react';

import { ICategory } from '@models/ICategory';
import CategoryLayout from '@components/CategoryLayout';
import { CardContainer, Content, Title } from './styles';
import CategoryCard from '@components/CategoryCard';
import DeleteComponent from '@components/DeleteComponent';

interface IMyCoursesTemplateProps {
  categories: ICategory[];
}

export function SavedCategoriesTemplate({ categories }: IMyCoursesTemplateProps) {

  const [currentCategories, setCurrentCategories] = useState<ICategory[]>(categories)

  function deleteCategory(id:string){
    return setCurrentCategories(
      currentCategories.filter((categories) => categories.id !== id)     
    );   
  }

  return (
    <CategoryLayout>
      <Title>
        <h1>Cursos salvos</h1>
      </Title>
      <Content>
        {currentCategories.map((category) => {
          return (
            <CardContainer key={category.id}>
              <CategoryCard
                img={category.img}
                lessons={category.lessons}
                title={category.name}
                deleteIcon={<DeleteComponent handleDelete={()=> deleteCategory(category.id)}/>}
              />
            </CardContainer>
          );
        })}
      </Content>
    </CategoryLayout>
  );
}
