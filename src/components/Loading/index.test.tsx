import { render } from '@testing-library/react';

import Loading from '.';

describe('<LoadingComponent />', () => {
  it('Should render properly', () => {
    render(<Loading />);
  });
});
