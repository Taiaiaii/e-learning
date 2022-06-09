import { ChangeEventHandler, MouseEvent, ReactNode } from 'react';
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
  handleSearchBar: ChangeEventHandler<HTMLInputElement>;
}

export default function CategoryLayout({ children, handleSearchBar }: ICategoryLayoutProps) {
  const { push } = useRouter();
  const { isSelected, setTab } = useTab();

  function handleOptionClick(e: MouseEvent<HTMLDivElement>) {
    const option = e.currentTarget.id;
    setTab(option as Tabs);
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
        <SearchBar handleInput={handleSearchBar} />
      </Header>
      <MainContainer>{children}</MainContainer>
      <Footer>
        <Options
          selected={isSelected('home')}
          onClick={handleOptionClick}
          id='home'
        >
          <Home />
          <p>Home</p>
        </Options>
        <Options
          selected={isSelected('saved')}
          onClick={handleOptionClick}
          id='saved'
        >
          <Saved />
          <p>Salvos</p>
        </Options>
      </Footer>
    </CategoryContainer>
  );
}
