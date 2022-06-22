import { fireEvent, render, screen } from '@testing-library/react';

import { MOCKED_CLASSES } from '../../../.mocks/constants';
import LessonTemplate from '.';

const mockedPush = jest.fn();
const mockedId = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockedPush,
      query: mockedId(),
    };
  },
}));

jest.mock('@hooks/useCategories', () => ({
  useCategories: () => ({
    classes: MOCKED_CLASSES[0].classes,
  }),
}));

describe('Lesson template', () => {
  it('Should call function on click arrow back', () => {
    mockedId.mockImplementation(() => ({
      id: '2',
    }));
    render(<LessonTemplate lesson={MOCKED_CLASSES[0].classes[0]} />);

    const arrowBack = screen.getByRole('button', { name: 'Aula anterior' });
    fireEvent.click(arrowBack);
    expect(mockedPush).toHaveBeenCalledWith('1');
  });

  it('Should go no next lesson on click arrow foward with id equal to classes lenght', () => {
    mockedId.mockImplementation(() => ({
      id: '3',
    }));

    render(<LessonTemplate lesson={MOCKED_CLASSES[0].classes[0]} />);

    const arrowFoward = screen.getByRole('button', { name: 'Próxima aula' });
    fireEvent.click(arrowFoward);
    expect(mockedPush).toHaveBeenCalledWith('4');
  });

  it('Should go no next lesson on click arrow foward with id less then classes lenght', () => {
    mockedId.mockImplementation(() => ({
      id: '1',
    }));
    render(<LessonTemplate lesson={MOCKED_CLASSES[0].classes[0]} />);

    const arrowFoward = screen.getByRole('button', { name: 'Próxima aula' });
    fireEvent.click(arrowFoward);
    expect(mockedPush).toHaveBeenCalledWith('2');
  });

  it('Should go to home on click arrow foward buttons since id is bigger then classes lenght', () => {
    mockedId.mockImplementation(() => ({
      id: '4',
    }));
    render(<LessonTemplate lesson={MOCKED_CLASSES[0].classes[0]} />);

    const arrowFoward = screen.getByRole('button', { name: 'Próxima aula' });
    fireEvent.click(arrowFoward);
    expect(mockedPush).not.toHaveBeenCalled();
  });
});