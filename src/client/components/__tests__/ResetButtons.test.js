import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResetButtons from '../ResetButtons';

describe('ResetButtons', () => {
  const onReset = jest.fn();
  const onRetry = jest.fn();

  it('renders', () => {
    render(<ResetButtons onReset={onReset} onRetry={onRetry} />);

    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Draw Again' }),
    ).toBeInTheDocument();
  });

  it('calls onReset appropriately', () => {
    render(<ResetButtons onReset={onReset} onRetry={onRetry} />);

    expect(onReset).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(onReset).toHaveBeenCalledTimes(1);
  });

  it('calls onRetry appropriately', () => {
    render(<ResetButtons onReset={onReset} onRetry={onRetry} />);

    expect(onRetry).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByRole('button', { name: 'Draw Again' }));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
