import { render, screen } from '@testing-library/react';

import Loading from '.';

describe('<LoadingComponent />', () => {
  it('Should render properly', () => {
    render(<Loading />);
    const dots = screen.getByTestId('dots')
    expect(dots).toBeInTheDocument()
  });
});
