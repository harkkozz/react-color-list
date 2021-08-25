import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render without failure', () => {
    const screen = render(<Button buttonText="Button" />);
    expect(screen.container.firstChild).toHaveClass('customButton');
  });

  it('should match snapshot', () => {
    const screen = render(<Button buttonText="Button" />);
    expect(screen).toMatchSnapshot();
  });
});
