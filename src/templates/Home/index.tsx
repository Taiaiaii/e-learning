import { useRouter } from 'next/router';

import { ICategory } from '@models/ICategory';
import CategoryLayout from '@components/CategoryLayout';
import CategoryCard from '@components/CategoryCard';
import { CardContainer, Content, Title } from './styles';

interface IHomeTemplateProps {
  categorys: ICategory[];
}

export function HomeTemplate({ categorys }: IHomeTemplateProps) {
  const {push} = useRouter()
  function handleClickCard(id:string){
    push(`categorias/${id}`)
  }
  return (
    <CategoryLayout>
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
              handleClick={()=> handleClickCard(category.id)}
            />
          </CardContainer>
        ))}
      </Content>
    </CategoryLayout>
  );
}
