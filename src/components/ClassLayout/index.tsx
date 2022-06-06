import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

import Logo from '@public/logo.svg';
import ArrowBack from '@public/arrow-back.svg';
import Like from '@public/like.svg';
import { ClassContainer, Header, MainContainer } from './styles';


interface IClassLayoutProps {
  children: ReactNode;
  route: string;
  handleClick?: () => void
}

export default function ClassLayout({ children, route, handleClick }: IClassLayoutProps) {
  const { push } = useRouter();
  function handleClickArrow(route: string) {
    push(`/${route}`);
  }
  return (
    <ClassContainer>
      <Header>
        <button aria-label='arrow-back' onClick={() => handleClickArrow(route)}>
          <ArrowBack />
        </button>
        <Logo />
        <button aria-label='like' onClick={handleClick}>
          <Like />
        </button>
      </Header>
      <MainContainer>{children}</MainContainer>
    </ClassContainer>
  );
}
