import { ReactNode } from 'react';
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
  const { isSelected, setTab } = useTab();

  function handleOptionClick(tab: Tabs, route: string) {
    return () => {
      setTab(tab);
      push(route);
    }
    
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
          selected={isSelected('home')}
          onClick={handleOptionClick('home', '/home')}
        >
          <Home />
          <p>Home</p>
        </Options>
        <Options
          selected={isSelected('saved')}
          onClick={handleOptionClick('saved', '/salvos')}
        >
          <Saved />
          <p>Salvos</p>
        </Options>
      </Footer>
    </CategoryContainer>
  );
}
