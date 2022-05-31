import React from 'react';
import Image from "next/image";

import { CategoryCardContainer, CategoryContent, CategoryTitle, Lessons } from "./styles";

type CategoryType = {
  img: string ;
  title: string;
  lessons: string;
};

export default function CategoryCard ({img, title, lessons}: CategoryType) {
    return (
        <CategoryCardContainer>
           <Image src={img} width={64} height={63} alt='' />
           <CategoryContent>
           <CategoryTitle>{title}</CategoryTitle>
           <Lessons>{lessons} Aulas</Lessons> 
           </CategoryContent>
        </CategoryCardContainer>
    )
}