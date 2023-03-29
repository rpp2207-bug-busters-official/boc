import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import {useRouter, push} from 'next/router';

// react components
import Authenticated from '../src/pages/authenticated.js';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
  push: jest.fn()
}));

describe('Testing the authenticated react component', () => {
  it('Should redirect unless the userId cookie is set', async () => {
    let count = 0;
    useRouter.mockReturnValue({push: () => {
      count++;
    }});
    render(<Authenticated/>);
    expect(count).toEqual(1);
  })
});