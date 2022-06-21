import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Trash from '@public/trash.svg';
import CategoryCard from '.';
import '@testing-library/jest-dom/extend-expect';

const mockedFunc = jest.fn();
describe('<CategoryCard />', () => {
  it('Should call a provided function to onClick when clicked', () => {
    render(
      <CategoryCard
        img='/build.svg'
        lessons='LESSONS'
        title='TITLE'
        handleClick={mockedFunc}
        id='1'
      />
    );

    const cardContent = screen.getByText('TITLE');
    fireEvent.click(cardContent);
    expect(mockedFunc).toBeCalled();
  });

  it('Should render with deleteIcon', () => {
    render(
      <CategoryCard
        img='/build.svg'
        lessons='LESSONS'
        title='TITLE'
        handleClick={mockedFunc}
        id='1'
        deleteIcon={<Trash />}
      />
    );

    const deleteIcon = screen.getByTestId('deleteIcon');
    expect(deleteIcon).toBeInTheDocument();
  });

  it('Should render without deleteIcon', () => {
    render(
      <CategoryCard
        img='/build.svg'
        lessons='LESSONS'
        title='TITLE'
        handleClick={mockedFunc}
        id='1'
      />
    );

    const deleteIcon = screen.queryByTestId('deleteIcon');
    expect(deleteIcon).not.toBeInTheDocument();
  });
});
