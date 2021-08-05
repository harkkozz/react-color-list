import { render } from '@testing-library/react';
import LoadingSpinner from '.';

describe('LoadingSpinner', () => {
  it('should render without failure', () => {
    const screen = render(<LoadingSpinner isLoading />);
    expect(screen.container.firstChild).toHaveClass('loading-spinner-container');
  });

  it('should match snapshot', () => {
    const screen = render(<LoadingSpinner isLoading />);
    expect(screen).toMatchSnapshot();
  });
});
