import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ClassLayout from '.';

const mockedBack = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      back: mockedBack,
    };
  },
}));

describe('ClassLayout Componente', () => {
  it('Should call useRoute on click arrow button', () => {
    render(
      <ClassLayout>
        <p>Teste</p>
      </ClassLayout>
    );

    const button = screen.getByRole('button', { name: 'arrow-back'})
    fireEvent.click(button)
    expect(mockedBack).toBeCalled()
  });

  it('Should Render children', () => {
    render(
      <ClassLayout >
        <p>Teste</p>
      </ClassLayout>
    );

    const children= screen.getByText('Teste');
    expect(children).toBeInTheDocument();
  });
});
