import { ReactNode, useState } from 'react';

import Home from '@public/home.svg';
import Saved from '@public/saved.svg';
import Logo from '@public/logo.svg';
import LogoutButtonIcon from '@public/logout.svg';
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

type Tabs = 'home' | 'saved';

export default function CategoryLayout({ children }: ICategoryLayoutProps) {
  
  const [tabSelected, setTabSelected] = useState<Tabs>('home')
 
  function isSelected(tab: Tabs){
    return tabSelected === tab
  }

  function setTab(tab: Tabs){
    return () => {
      setTabSelected(tab)
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
          onClick={setTab('home')}
        >
          <Home />
          <p>Home</p>
        </Options>
        <Options
          selected={isSelected('saved')}
          onClick={setTab('saved')}
        >
          <Saved />
          <p>Salvos</p>
        </Options>
      </Footer>
    </CategoryContainer>
  );
}
