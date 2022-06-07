import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

import Logo from '@public/logo.svg';
import ArrowBack from '@public/arrow-back.svg';
import Like from '@public/like.svg';
import { ClassContainer, Header, MainContainer } from './styles';


interface IClassLayoutProps {
  children: ReactNode;
  handleClick?: () => void
}

export default function ClassLayout({ children, handleClick }: IClassLayoutProps) {
  const {  back } = useRouter();
  function handleClickArrow() {
    back()
  }
  return (
    <ClassContainer>
      <Header>
        <button aria-label='arrow-back' onClick={() => handleClickArrow()}>
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
