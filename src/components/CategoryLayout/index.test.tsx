import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import CategoryLayout from '.';

const mockedPush = jest.fn();
const mockedOptionClick = jest.fn();
const mockTabSelected = jest.fn();

jest.mock('@hooks/useTab', () => ({
  useTab: () => ({
    isTabSelected: mockTabSelected,
    selectTab: mockedOptionClick,
  }),
}));

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockedPush,
    };
  },
}));

describe('Category layout', () => {
  it('Should render child properly', () => {
    render(<CategoryLayout >TEST</CategoryLayout>);

    const children = screen.getByText('TEST');
    expect(children).toBeInTheDocument();
  });

  it('Should call provided function to onClick home option clicked', () => { 
    render(<CategoryLayout>TEST</CategoryLayout>);

    const option = screen.getByTestId('option-home');

    fireEvent.click(option);
    expect(mockedOptionClick).toBeCalled();
    expect(mockedPush).toBeCalled();
  });

  it('Should call provided function to onClick saved option clicked', () => {
    render(<CategoryLayout>TEST</CategoryLayout>);

    const option = screen.getByTestId('option-saved');
    fireEvent.click(option);
    expect(mockedOptionClick).toBeCalled();
    expect(mockedPush).toBeCalled();
  });
});
