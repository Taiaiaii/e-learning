import { ICategory } from '@models/ICategory';
import CategoryLayout from '@components/CategoryLayout';
import { CardContainer, Content, Title } from './styles';
import CategoryCard from '@components/CategoryCard';
import DeleteComponent from '@components/DeleteComponent';

interface IMyCoursesTemplateProps {
  categorys: ICategory[];
}

export function MyCoursesTemplate({ categorys }: IMyCoursesTemplateProps) {
  return (
    <CategoryLayout>
      <Title>
        <h1>Cursos salvos</h1>
      </Title>
      <Content>
        {categorys.map((category) => {
          return (
            <CardContainer key={category.id}>
              <CategoryCard
                img={category.img}
                lessons={category.lessons}
                title={category.name}
                deleteIcon={<DeleteComponent/>}
              />
            </CardContainer>
          );
        })}
      </Content>
    </CategoryLayout>
  );
}
