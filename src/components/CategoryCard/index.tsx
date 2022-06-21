import React, { MouseEvent } from 'react';
import Image from "next/image";
import { ReactElement } from "react";

import { CategoryCardContainer, CategoryContent, CategoryTitle, ChildrenContainer, Lessons } from "./styles";

interface ICategoryCardProps {
  img: string;
  title: string;
  lessons: string;
  id: string;
  deleteIcon?: ReactElement;
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function CategoryCard ({img, title, lessons, deleteIcon, handleClick, id}: ICategoryCardProps) {
    return (
      <CategoryCardContainer>
        <Image src={img} width={64} height={64} alt='' />
        <CategoryContent
          onClick={handleClick}
          id={id}
          data-testid='category-card'
        >
          <CategoryTitle>{title}</CategoryTitle>
          <Lessons>{lessons} Aulas</Lessons>
        </CategoryContent>
        {deleteIcon && (
          <ChildrenContainer data-testid='deleteIcon'>
            {deleteIcon}
          </ChildrenContainer>
        )}
      </CategoryCardContainer>
    );
}