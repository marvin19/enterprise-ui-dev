// @vitest-environment happy-dom

import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { render } from './test/utilities';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  //screen.debug(document.body);
});

test(
  'it should increment when the "Increment" button is pressed',
  async () => {
    const { user } = render(<Counter />);
    const currentCount = screen.getByTestId('current-count');
    expect(currentCount).toHaveTextContent('0');

    const button = screen.getByText('Increment');
    await user.click(button)

    // Increment should now be 1
    expect(currentCount).toHaveTextContent('1');
    screen.debug();
  },
);
