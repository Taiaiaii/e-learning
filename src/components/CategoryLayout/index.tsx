import { ReactNode, useState } from 'react';

import Home from '@public/home.svg';
import Saved from '@public/saved.svg';
import Logo from '@public/logo.svg';
import LogoutButton from '@public/logout.svg';
import SearchBar from '@components/SearchBar';
import {
  CategoryContainer,
  Content,
  Footer,
  Header,
  MainContainer,
  Options,
} from './styles';

interface ICategoryLayoutProps {
  children: ReactNode;
}

export default function CategoryLayout({ children }: ICategoryLayoutProps) {
  const [isHomeSelected, setSelectHome] = useState(true);
  const [isSavedSelected, setSelectSaved] = useState(false);

  return (
    <CategoryContainer>
      <Header>
        <Content>
          <Logo />
          <button aria-label='like'>
            <LogoutButton />
          </button>
        </Content>
        <SearchBar />
      </Header>
      <MainContainer>{children}</MainContainer>
      <Footer>
        <Options
          selected={isHomeSelected}
          onClick={() => {
            setSelectHome(true);
            setSelectSaved(false);
          }}
        >
          <Home />
          <p>Home</p>
        </Options>
        <Options
          selected={isSavedSelected}
          onClick={() => {
            setSelectSaved(true);
            setSelectHome(false);
          }}
        >
          <Saved />
          <p>Salvos</p>
        </Options>
      </Footer>
    </CategoryContainer>
  );
}
