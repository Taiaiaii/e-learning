import { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { TabNavigatorProvider } from '@context/TabNavigatorContext';
import { useTab } from '.';

const wrapper = ({ children }: { children: ReactNode }) => (
  <TabNavigatorProvider>{children}</TabNavigatorProvider>
);

describe('TabNavigator Context', ()=> {
    it('Should return false before set selectTabe', ()=> {
        const { result } = renderHook(() => useTab(), {
          wrapper,
        });

        let savedIsSelected;
        const tab = 'saved';

        act(()=> {
        savedIsSelected = result.current.isTabSelected(tab);
        })

        expect(savedIsSelected).toBeFalsy();

    });
     it('Should return true when selectTab is seted', () => {
       const { result } = renderHook(() => useTab(), {
         wrapper,
       });

       let savedIsSelected;
       const tab = 'saved';

       act(() => {
         result.current.selectTab(tab);
       });

       act(() => {
         savedIsSelected = result.current.isTabSelected(tab);
       });

       expect(savedIsSelected).toBeTruthy();
     });
})