import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import {Button}  from '.';

describe('Button', () => {
  it('Should execute the function on click', () => {
    const fn = jest.fn();

    render(
      <Button variant='filled' onClick={fn}>
        Example button
      </Button>
    );

    const button = screen.getByRole('button', { name: /Example button/ });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });
});
