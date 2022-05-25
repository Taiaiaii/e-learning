import { fireEvent, render, screen } from '@testing-library/react';
import DeleteComponent from '.';

describe('Delete component', ()=> {
    it('Should display alert dialog on click', ()=> {
        render(<DeleteComponent/>)

        const garbage = screen.getByRole('button')
        
        fireEvent.click(garbage)

        const dialog = screen.getByTestId('dialog')
        expect(dialog).toBeInTheDocument();
    })
    it('Should close alert dialog on click confirm or cancel button', () => {
      render(<DeleteComponent />);

      const garbage = screen.getByRole('button');
      fireEvent.click(garbage);

      const cancelButton = screen.getByRole('button', { name: 'Não' });
      fireEvent.click(cancelButton);
      const dialog = screen.queryByTestId('dialog');
      expect(dialog).not.toBeInTheDocument();

      fireEvent.click(garbage);

      const confirmButton = screen.getByRole('button', { name: 'Com certeza' });
      fireEvent.click(confirmButton);     
      expect(dialog).not.toBeInTheDocument();     
    });
})