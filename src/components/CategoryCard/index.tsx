import React, { MouseEventHandler } from 'react';
import Image from "next/image";
import { ReactElement } from "react";

import { CategoryCardContainer, CategoryContent, CategoryTitle, ChildrenContainer, Lessons } from "./styles";

interface ICategoryCardProps {
  img: string;
  title: string;
  lessons: string;
  id: string
  deleteIcon?: ReactElement;
  handleClick: MouseEventHandler<HTMLDivElement>;
}

export default function CategoryCard ({img, title, lessons, deleteIcon, handleClick, id}: ICategoryCardProps) {
    return (
      <CategoryCardContainer>
        <Image src={img} width={64} height={64} alt='' />
        <CategoryContent onClick={handleClick} id={id}>
          <CategoryTitle>{title}</CategoryTitle>
          <Lessons>{lessons} Aulas</Lessons>
        </CategoryContent>
        {deleteIcon && <ChildrenContainer data-testid='deleteIcon'>{deleteIcon}</ChildrenContainer>}
      </CategoryCardContainer>
    );
}