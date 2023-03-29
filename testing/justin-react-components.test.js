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
  let count = 0;
  beforeEach(() => {
    useRouter.mockReturnValue({push: () => {
      count++;
    }});
    Object.defineProperty(window.document, 'cookie', {
      configurable: true,
      writeable: true,
      value:'userId=thisIsACookie'
    });
  })

  it('Should redirect unless the userId cookie is set', async () => {
    Object.defineProperty(window.document, 'cookie', {
      configurable: true,
      writeable: true,
      value:''
    })
    render(<Authenticated/>);
    expect(count).toEqual(1);
  });

  it('Should render the authenticated page if the cookie is set', async () => {
    let page = render(<Authenticated/>);
    expect(count).toEqual(0);
    expect(typeof page.getByText('Completed Activities')).toBe('object');
    expect(typeof page.getByText('My Activities')).toBe('object');
    expect(typeof page.getByText('Favorite Activites')).toBe('object');
  });

  afterEach(() => {
    count = 0;
  });
});