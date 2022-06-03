import { useState } from 'react';

import { ICategory } from '@models/ICategory';
import CategoryLayout from '@components/CategoryLayout';
import { CardContainer, Content, Title } from './styles';
import CategoryCard from '@components/CategoryCard';
import DeleteComponent from '@components/DeleteComponent';

interface IMyCoursesTemplateProps {
  categorys: ICategory[];
}

export function MyCoursesTemplate({ categorys }: IMyCoursesTemplateProps) {

  const [currentCategorys, setCurrentCategorys] = useState<ICategory[]>(categorys)

  function deleteCategory(id:string){
    console.log('fui clicado')
    return setCurrentCategorys(
      currentCategorys.filter((categorys) => categorys.id !== id)     
    );   
  }
  
  console.log(currentCategorys);
  return (
    <CategoryLayout>
      <Title>
        <h1>Cursos salvos</h1>
      </Title>
      <Content>
        {currentCategorys.map((category) => {
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
