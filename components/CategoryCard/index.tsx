import Image from "next/image";
import { ReactElement } from "react";
import { CategoryCardContainer, CategoryContent, CategoryTitle, ChildrenContainer, Lessons } from "./styles";

type CategoryType = {
  img: string ;
  title: string;
  lessons: string;
  deleteIcon?: ReactElement
};

export default function CategoryCard ({img, title, lessons, deleteIcon}: CategoryType) {
    return (
      <CategoryCardContainer>
        <Image src={img} width={64} height={64} alt='' />
        <CategoryContent>
          <CategoryTitle>{title}</CategoryTitle>
          <Lessons>{lessons} Aulas</Lessons>
        </CategoryContent>
        {deleteIcon && <ChildrenContainer>{deleteIcon}</ChildrenContainer> }       
      </CategoryCardContainer>
    );
}