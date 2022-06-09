import * as React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';

import { ClassesTemplate } from '.';
import { MOCKED_CATEGORY_LIST } from '../../../.mocks/constants/MOCKED_CATEGORY_LIST';
import { MOCKED_CLASSES } from '../../../.mocks/constants/MOCKED_CLASSES';

const mockedPush = jest.fn();
const mockedHandleClick = jest.fn()

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockedPush,
    };
  },
}));

jest.mock('@hooks/useCategories', () => ({
  useCategories: () => ({
    addCategory: mockedHandleClick
  })
}))

describe('Lesson Template', ()=> {
    it('Should call function on click like', () => {
        render(
          <ClassesTemplate
            category={MOCKED_CATEGORY_LIST[0]}
            classes={MOCKED_CLASSES[0].classes}
          />
        );

        const likeButton = screen.getByLabelText('like')
        fireEvent.click(likeButton)
        expect(mockedHandleClick).toBeCalled()
        expect(mockedPush).toBeCalled()
    });
    it('Should call function on click card', () => {
      render(
        <ClassesTemplate
          category={MOCKED_CATEGORY_LIST[0]}
          classes={MOCKED_CLASSES[0].classes}
        />
      );

      const card = screen.getAllByTestId('card');
      fireEvent.click(card[1]);
      expect(mockedPush).toBeCalled();
    });
})