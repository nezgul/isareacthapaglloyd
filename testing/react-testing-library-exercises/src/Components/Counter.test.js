// Dopisz pozostałe testy.
import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Counter', () => {
  test('should have initial counter set to 0', () => {
    render(<Counter />);

    expect(screen.queryByText('value: 0')).toBeInTheDocument();
  });

  test('should have increase counter when increase clicked', () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole('button', { name: 'increase' }));

    expect(screen.queryByText('value: 1')).toBeInTheDocument();
  });
});
