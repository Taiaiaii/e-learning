import { MouseEvent, ReactNode } from 'react';
import { useRouter } from 'next/router';

import Home from '@public/home.svg';
import Saved from '@public/saved.svg';
import Logo from '@public/logo.svg';
import LogoutButtonIcon from '@public/logout.svg';
import SearchBar from '@components/SearchBar';
import { useTab } from '@hooks/useTab';
import { Tabs } from '@context/TabNavigatorContext';
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
  const { push } = useRouter();
  const { isTabSelected, selectTab } = useTab();

  function handleOptionClick(e: MouseEvent<HTMLDivElement>) {
    const option = e.currentTarget.id;
    selectTab(option as Tabs);
    push(option);
  }

  return (
    <CategoryContainer>
      <Header>
        <Content>
          <Logo />
          <button aria-label='like'>
            <LogoutButtonIcon />
          </button>
        </Content>
        <SearchBar />
      </Header>
      <MainContainer>{children}</MainContainer>
      <Footer>
        <Options
          selected={isTabSelected('home')}
          onClick={handleOptionClick}
          id='home'
          data-testid='option-home'
        >
          <Home />
          <p>Home</p>
        </Options>
        <Options
          selected={isTabSelected('saved')}
          onClick={handleOptionClick}
          id='saved'
          data-testid='option-saved'
        >
          <Saved />
          <p>Salvos</p>
        </Options>
      </Footer>
    </CategoryContainer>
  );
}
