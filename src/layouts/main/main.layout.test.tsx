import React from 'react';
import { render } from '@testing-library/react';
import '../__mocks__/matchMedia.mock';
import Main from './main.layout';

test('renders React Sidebar text', () => {
  const { getAllByText } = render(<Main />);
  const arrayTextElement = getAllByText(/React Sidebar/i);
  expect(arrayTextElement instanceof Array).toBeTruthy();
  expect(arrayTextElement[0]).toBeInTheDocument();
});
