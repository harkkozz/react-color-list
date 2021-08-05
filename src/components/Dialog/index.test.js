import { render } from '@testing-library/react';
import Dialog from '.';

describe('Dialog', () => {
  it('should render without failure', () => {
    const screen = render(<Dialog open />);
    expect(screen.container.firstChild).toHaveClass('dialog-container');
  });

  it('should match snapshot', () => {
    const screen = render(<Dialog open />);
    expect(screen).toMatchSnapshot();
  });
});
