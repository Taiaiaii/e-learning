import { fireEvent, render, screen } from "@testing-library/react";

import { SavedCategoriesTemplate } from "."
import {MOCKED_SAVED_COURSES} from '../../../.mocks/constants'

const mockedPush = jest.fn();
const mockedTabSelected = jest.fn();
const mockedDelete = jest.fn()

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockedPush,
    };
  },
}));

jest.mock('@hooks/useTab', () => ({
  useTab: () => ({
    isTabSelected: mockedTabSelected,
  }),
}));

jest.mock('@hooks/useCategories', () => ({
  useCategories: () => ({
    deleteCategory: mockedDelete,
  }),
}));

describe('Saved template', ()=> {
    it('Should call func on click card', ()=> {
        render(<SavedCategoriesTemplate categories={MOCKED_SAVED_COURSES}/>)
        const cards = screen.getAllByTestId('category-card')
        fireEvent.click(cards[0])
        expect(mockedPush).toBeCalled();
    });

    it('Should call delete function on click confirm deletion button', () => {
      render(<SavedCategoriesTemplate categories={MOCKED_SAVED_COURSES} />);    
  
      const deleteButtons = screen.getAllByTestId('trigger-button');     
  
      console.log(deleteButtons[0])
      fireEvent.click(deleteButtons[0]);
      
      const confirmButton = screen.getByRole('button', {name: 'Com certeza'})
      fireEvent.click(confirmButton)
      expect(mockedDelete).toBeCalled

    });

    it('Should close modal on click cancel deletion button', () => {
      render(<SavedCategoriesTemplate categories={MOCKED_SAVED_COURSES} />);

      const deleteButtons = screen.getAllByTestId('trigger-button');

      console.log(deleteButtons[0]);
      fireEvent.click(deleteButtons[0]);

      const cancelButton = screen.getByRole('button', { name: 'Não' });
      fireEvent.click(cancelButton);
     
       const confirmButton = screen.queryByRole('button', {name: 'Com certeza'})
       expect(confirmButton).not.toBeInTheDocument()
    });
   
})