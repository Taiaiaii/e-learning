import { ICategory } from 'models/ICategory';

import CategoryLayout from '@components/CategoryLayout';
import { CardContainer, Content, Title } from './styles';
import CategoryCard from '@components/CategoryCard';

interface IHomeTemplateProps {
    categorys: ICategory[];
}

export function HomeTemplate({categorys}: IHomeTemplateProps) {
  return (
    <CategoryLayout>
      <Title>
        <h1>Categorias</h1>
        <p>{categorys.length} cursos</p>
      </Title>
      <Content>
        {categorys.map((category) => {
          return (
            <CardContainer key={category.id}>
              <CategoryCard
                img={category.img}
                lessons={category.lessons}
                title={category.name}                
              />
            </CardContainer>
          );
        })}
      </Content>
    </CategoryLayout>
  );
}
