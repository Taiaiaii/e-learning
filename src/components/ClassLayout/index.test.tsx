import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ClassLayout from '.';

const mockedPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      back: mockedPush,
    };
  },
}));

describe('ClassLayout Componente', () => {
  it('Should call route on click arrow button', () => {
    render(
      <ClassLayout>
        <p>Teste</p>
      </ClassLayout>
    );

    const button = screen.getByRole('button', { name: 'arrow-back'})

    fireEvent.click(button)
    expect(mockedPush).toBeCalled()
  });
  it('Render children', () => {
    render(
      <ClassLayout >
        <p>Teste</p>
      </ClassLayout>
    );

    const children= screen.getByText('Teste');

    expect(children).toBeInTheDocument();
  });
});
