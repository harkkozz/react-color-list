import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render without failure', () => {
    const screen = render(<App />);
    expect(screen.container.firstChild).toHaveClass('App');
  });
});
