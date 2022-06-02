import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ClassesTemplate } from '.';
import { MOCKED_LIST } from '../../../.mocks/constants/MOCKED_CATEGORY_LIST';
import { MOCKED_CLASSES } from '../../../.mocks/constants/MOCKED_CLASSES';

const mockedPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockedPush,
    };
  },
}));

describe('Lesson Template', ()=> {
    it('Should render all elements properly', () => {
        render(<ClassesTemplate category={MOCKED_LIST[0]} classes={MOCKED_CLASSES}/>)

        const title = screen.getByText('Matemática')
        expect(title).toBeInTheDocument()
    })
})