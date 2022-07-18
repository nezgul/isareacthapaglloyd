// Dopisz pozostałe testy.
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextTransformer from './TextTransformer';

describe('TextTransformer', () => {
  test('should transform inserted text', () => {
    render(<TextTransformer />);

    expect(screen.queryByText('Transformed text:')).not.toBeInTheDocument();

    const input = screen.getByLabelText('Insert text');

    userEvent.type(input, 'hello!');

    expect(screen.getByText('Transformed text:')).toBeInTheDocument();
    expect(screen.getByText('__HELLO!__')).toBeInTheDocument();
  });

  test('should not override inserted text when prop has been set later', () => {
    const { rerender } = render(<TextTransformer value='' />);

    expect(screen.queryByText('Transformed text:')).not.toBeInTheDocument();

    const input = screen.getByLabelText('Insert text');
    userEvent.type(input, 'hello!');

    expect(screen.getByText('__HELLO!__')).toBeInTheDocument();

    rerender(<TextTransformer value='suprise!' />);

    expect(screen.getByText('__HELLO!__')).toBeInTheDocument();
  });
});
