import { ICategory } from '@models/ICategory';
import CategoryLayout from '@components/CategoryLayout';
import { CardContainer, Content, Title } from './styles';
import CategoryCard from '@components/CategoryCard';
import DeleteComponent from '@components/DeleteComponent';
import { useCategories } from '@hooks/useCategories';

interface IMyCoursesTemplateProps {
  categories: ICategory[];
}

export function SavedCategoriesTemplate({ categories }: IMyCoursesTemplateProps) {

  const { deleteCategory} = useCategories()

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
              />
            </CardContainer>
          );
        })}
      </Content>
    </CategoryLayout>
  );
}
