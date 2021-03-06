import { fireEvent, render, screen } from '@testing-library/react';

import DeleteComponent from '.';

const mockedFunc = jest.fn()

describe('Delete component', ()=> {
    it('Should display alert dialog on click', ()=> {
        render(<DeleteComponent handleDelete={mockedFunc}/>)

        const button = screen.getByRole('button')
        
        fireEvent.click(button)

        const dialog = screen.getByTestId('dialog')
        expect(dialog).toBeInTheDocument();
    })
    it('Should close alert dialog on click confirm or cancel button', () => {
      render(<DeleteComponent handleDelete={mockedFunc} />);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      const cancelButton = screen.getByRole('button', { name: 'Não' });
      fireEvent.click(cancelButton);
      const dialog = screen.queryByTestId('dialog');
      expect(dialog).not.toBeInTheDocument();

      fireEvent.click(button);

      const confirmButton = screen.getByRole('button', { name: 'Com certeza' });
      fireEvent.click(confirmButton); 
      expect(mockedFunc).toBeCalled()    
      expect(dialog).not.toBeInTheDocument();     
    });
})