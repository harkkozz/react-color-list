import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('should render without failure', () => {
    const screen = render(<Input name="input-test" placeholder="placeholder" value="" />);
    expect(screen.container.firstChild).toHaveClass('inputContainer');
  });

  it('should match snapshot', () => {
    const screen = render(<Input name="input-test" placeholder="placeholder" value="" />);
    expect(screen).toMatchSnapshot();
  });
});
