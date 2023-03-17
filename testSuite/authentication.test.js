import { render, waitFor, fireEvent, getByText, act } from '@testing-library/react';
import Login from '../src/pages/Login/Login.js';
import renderer from 'react-test-renderer';
import React from 'react';


describe('Authentication test suite', () => {
  it('Should allow signin through google', async () => {
    const {container} = render(
      <Login/>
    );

    expect(container.getElementsByClassName('authentication').length).toBeGreaterThanOrEqual(1)
    await waitFor(() => {
      fireEvent.click(container.getElementsByClassName('authentication')[0]);

    })
  });

  // it('Should allow signin through facebook', () => {

  // });
})