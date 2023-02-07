/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Todo from './todo/Todo';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders Todo component without crashing', () => {
  act(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Todo />
      </React.StrictMode>,
      container
    );
  });
  expect(container.textContent).toBeTruthy();
});
