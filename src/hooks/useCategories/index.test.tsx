import { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { CategoriesProvider } from '@context/CategoriesContext';
import { useCategories } from '.';
import {
  MOCKED_CATEGORY_LIST,
  MOCKED_CLASSES,
} from '../../../.mocks/constants';
import { ICategory, ICourse } from '@models';

const wrapper = ({ children }: { children: ReactNode }) => (
  <CategoriesProvider>{children}</CategoriesProvider>
);
describe('UseCategories Hook', () => {
  it('Should get category by id', () => {
    const { result } = renderHook(() => useCategories(), {
      wrapper,
    });

    let category: ICategory | undefined;
    const id = MOCKED_CATEGORY_LIST[0].id;

    act(() => {
      category = result.current.getCategory(id);
    });

    expect(category).toBe(MOCKED_CATEGORY_LIST[0]);
  });
  it('Should get correct class list', () => {
    const { result } = renderHook(() => useCategories(), {
      wrapper,
    });

    let classes: ICourse[] = [];
    const id = MOCKED_CATEGORY_LIST[0].id;

    act(() => {
      classes = result.current.getCategoryClasses(id);
    });

    expect(classes).toBe(MOCKED_CLASSES[0].classes);
  });
  it('Should return empty array when category doest exist', () => {
    const { result } = renderHook(() => useCategories(), {
      wrapper,
    });

    let classes: ICourse[] = [];
    const id = '0000';

    act(() => {
      classes = result.current.getCategoryClasses(id);
    });

    expect(classes).toStrictEqual([]);
  });

  it('Should return empty array when classes doest exist', () => {
    const { result } = renderHook(() => useCategories(), {
      wrapper,
    });

    let classes: ICourse[] = [];
    const id = MOCKED_CATEGORY_LIST[6].id;

    act(() => {
      classes = result.current.getCategoryClasses(id);
    });

    expect(classes).toStrictEqual([]);
  });

   it('Should return category list with intens that name mach with value inputed', () => {
     const { result } = renderHook(() => useCategories(), {
       wrapper,
     });

     let categories: ICategory [] = []
     const value = 'temá'

     act(() => {
      result.current.searchAllCategories(value);
     });

     act(() => {
       categories = result.current.visibleCategories;
     });

     expect(categories[0].name.toLowerCase().includes(value)).toBeTruthy();
   });
    it('Should return saved category list with intens that name mach with value inputed', () => {
      const { result } = renderHook(() => useCategories(), {
        wrapper,
      });

      let categories: ICategory[] = [];
      const value = 'temá';

      act(() => {
        result.current.searchSavedCategories(value);
      });

      act(() => {
        categories = result.current.visibleSavedCategories;
      });

      expect(categories[0].name.toLowerCase().includes(value)).toBeTruthy();
    });
    it('Should update savedCategory with new add iten', () => {
      const { result } = renderHook(() => useCategories(), {
        wrapper,
      });

      let categories: ICategory[] = [];
      const id = MOCKED_CATEGORY_LIST[5].id;

      act(() => {
        result.current.addCategory(id);
      });

      act(() => {
        categories = result.current.visibleSavedCategories;
      });

      expect(categories.includes(MOCKED_CATEGORY_LIST[5])).toBeTruthy();
    });
    it('Should return empty array when category doest exist', () => {
      const { result } = renderHook(() => useCategories(), {
        wrapper,
      });

      let previousCategories: ICategory[] = [];
      let categories: ICategory[] = [];
      const id = '0000';

      act(() => {
        previousCategories = result.current.visibleSavedCategories;
      });

      act(() => {
        result.current.addCategory(id);
      });

      act(() => {
        categories = result.current.visibleSavedCategories;
      });

      expect(categories).toStrictEqual(previousCategories);
    });
    it('Should update savedCategory without deleted iten', () => {
      const { result } = renderHook(() => useCategories(), {
        wrapper,
      });

      let categories: ICategory[] = [];
      const id = MOCKED_CATEGORY_LIST[5].id;

      act(() => {
        result.current.deleteCategory(id);
      });

      act(() => {
        categories = result.current.visibleSavedCategories;
      });

      expect(categories.includes(MOCKED_CATEGORY_LIST[5])).toBeFalsy();
    });
});
