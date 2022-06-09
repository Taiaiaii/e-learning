import React, { MouseEventHandler } from 'react';

import Icon from '@public/courses.svg'
import Clock from '@public/clock.svg'
import { BottomContainer, ClassCardContainer, Content, Details, IconContainer, Label, Time, Title } from './styles'

interface IClassCardProps {
  isConcluded: boolean;
  title: string;
  time: number;
  id: string;
  classNumber: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
}

export default function ClassCard ({isConcluded,time, title, classNumber, handleClick, id }: IClassCardProps){
    return (
      <ClassCardContainer onClick={handleClick} id={id} data-testid='card'>
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