import React from 'react'

import Icon from '@public/courses.svg'
import Clock from '@public/clock.svg'
import { BottomContainer, ClassCardContainer, Content, Details, IconContainer, Label, Time, Title } from './styles'

interface IClassCardProps {
    isConcluded: boolean;
    title: string;
    time: number;
    classNumber: string;
    handleClickCard: () => void
}

export default function ClassCard ({isConcluded,time, title, classNumber, handleClickCard}: IClassCardProps){
    return (
      <ClassCardContainer onClick={handleClickCard}>
        <IconContainer concluded={isConcluded}>
          <Icon />
        </IconContainer>
        <Content>
          <Title>{title}</Title>
          <BottomContainer>
            <Details>
              <p>Aula {classNumber}</p>
              <Time>
                <Clock />
                <p>{time} min</p>
              </Time>
            </Details>
            {isConcluded && (
              <Label>
                <p>Completo!</p>
              </Label>
            )}
          </BottomContainer>
        </Content>
      </ClassCardContainer>
    );
}