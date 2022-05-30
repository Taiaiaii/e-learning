import React from 'react';

import { useRouter } from 'next/router';
import Icon from 'public/Vector.svg';

import Button from '@/components/Button';

import { BottomContainer, MainContainer, TopContainer } from './styles';


export function LoginTemplate() {
  const { push } = useRouter();
  return (
    <MainContainer>
      <TopContainer>
        <Icon data-testid='image' />
      </TopContainer>
      <BottomContainer>
        <div>
          <h1>Aprenda da melhor forma</h1>
          <p data-testid='informer'>
            Entre na plataforma e <br /> acesse cursos de diversas áreas de
            conhecimento.
          </p>
        </div>
        <Button fullWidth variant='filled' onClick={() => push('/home')}>
          Começar os estudos
        </Button>
      </BottomContainer>
    </MainContainer>
  );
}
