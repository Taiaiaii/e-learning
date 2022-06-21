import React from 'react';
import { render, screen } from '@testing-library/react';

import ClassCard from '.';

const mockedPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockedPush,
    };
  },
}));

describe('<ClassCard />', () => {
  it('Should render with label', () => {
    render(
      <ClassCard
        classNumber='01'
        isConcluded={true}
        time={5}
        title='teste'
        handleClick={mockedPush}
        id='1'
      />
    );

    const label = screen.getByText('Completo!');
    expect(label).toBeInTheDocument();
  });

  it('Should render without label', () => {
    render(
      <ClassCard
        handleClick={mockedPush}
        classNumber='01'
        isConcluded={false}
        time={5}
        title='teste'
        id='1'
      />
    );

    const label = screen.queryByText('Completo!');
    expect(label).not.toBeInTheDocument();
  });

});
