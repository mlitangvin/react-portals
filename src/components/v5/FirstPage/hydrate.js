import React from 'react';
import { render, hydrate } from 'react-dom';
import FirstPage from '.';

hydrate(<FirstPage />, document.getElementById('oneroot'));

export const rerender = () => {
  render(<FirstPage />, document.getElementById('oneroot'));
};
