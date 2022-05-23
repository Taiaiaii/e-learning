import { fireEvent, render, screen } from '@testing-library/react';
import { LoginTemplate } from '.';
// import '@testing-library/jest-dom';

const mockedPush = jest.fn()

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockedPush ,

    };
  },
}));
describe('Login Template', () => {
  
  it('Should render all elements properly', ()=> {
    render(<LoginTemplate />);

    const title = screen.getByText('Aprenda da melhor forma');
    const informer = screen.getByTestId('informer')
    const image = screen.getByTestId('image')

    expect(title).toBeInTheDocument()
    expect(informer).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
  it('Should call function on click button', () => {
      render(<LoginTemplate />);

      const button = screen.getByRole('button', {
        name: /Começar os estudos/,
      })
      fireEvent.click(button)
      expect(mockedPush).toHaveBeenCalled()

  });
});
