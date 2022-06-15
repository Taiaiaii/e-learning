import { fireEvent, render, screen } from '@testing-library/react';

import { SavedCategoriesTemplate } from '.';
import { MOCKED_SAVED_CATEGORIES } from '../../../.mocks/constants';

const mockedPush = jest.fn();
const mockedTabSelected = jest.fn();
const mockedDelete = jest.fn();
const mockedSearch = jest.fn();

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
    searchSavedCategories: mockedSearch,
  }),
}));

describe('Saved template', () => {
  it('Should call func on click card', () => {
    render(<SavedCategoriesTemplate categories={MOCKED_SAVED_CATEGORIES} />);

    const cards = screen.getAllByTestId('category-card');
    fireEvent.click(cards[0]);
    expect(mockedPush).toBeCalled();
  });

  it('Should call delete function on click confirm deletion button', () => {
    render(<SavedCategoriesTemplate categories={MOCKED_SAVED_CATEGORIES} />);

    const deleteButtons = screen.getAllByTestId('trigger-button');
    fireEvent.click(deleteButtons[0]);

    const confirmButton = screen.getByRole('button', { name: 'Com certeza' });
    fireEvent.click(confirmButton);
    expect(mockedDelete).toBeCalled();
  });

  it('Should close modal on click cancel deletion button', () => {
    render(<SavedCategoriesTemplate categories={MOCKED_SAVED_CATEGORIES} />);

    const deleteButtons = screen.getAllByTestId('trigger-button');
    fireEvent.click(deleteButtons[0]);

    const cancelButton = screen.getByRole('button', { name: 'Não' });
    fireEvent.click(cancelButton);

    const dialog = screen.queryByTestId('dialog');
    expect(dialog).not.toBeInTheDocument();
  });

  it('Should call function on type search bar', () => {
    render(<SavedCategoriesTemplate categories={MOCKED_SAVED_CATEGORIES} />);

    const searchBar = screen.getByTestId('search-bar');
    fireEvent.change(searchBar, { target: { value: 'matemática' } });
    expect(mockedSearch).toBeCalled();
  });
});
