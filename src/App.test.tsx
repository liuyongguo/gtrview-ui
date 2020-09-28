import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Button from './components/Button/Button'
test('renders learn react link', () => {
  const { getByText } = render(<Button>hello</Button>);
  const linkElement = getByText('hello');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.tagName).toEqual('BUTTON')
});
