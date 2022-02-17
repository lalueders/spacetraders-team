import { screen, render } from '@testing-library/react';
import Status from './Status.js';

describe('Status', () => {
  it('renders without error', () => {
    render(<Status />);
  });

  it('shows a green state with isGreen={true}', () => {
    render(<Status isGreen={true} />);

    const status = screen.getByText('green');
    expect(status).toBeInTheDocument();
    const notRed = screen.queryByText('red');
    expect(notRed).not.toBeInTheDocument();
  });

  it('shows a red state with isGreen={false}', () => {
    render(<Status isGreen={false} />);

    const status = screen.getByText('red');
    expect(status).toBeInTheDocument();
    const notGreen = screen.queryByText('green');
    expect(notGreen).not.toBeInTheDocument();
  });
});
