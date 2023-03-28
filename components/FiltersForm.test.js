import { render, screen, fireEvent, cleanup, renderHook, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
import '@testing-library/jest-dom';
import ChargerMap from "../src/pages/ChargerMap/ChargerMap.js";
import FiltersForm from './FiltersForm.js';
import {Modal, Button, Form} from 'react-bootstrap';

const defaultProps = {
//  onClick: jest.fn(),
//  text: 'Submit',
};

afterEach(() => {
  cleanup();
  // jest.mock('axios');
});



describe('heading', () => {
 it('renders the heading', () => {
   render(<FiltersForm />);
   const button = screen.getByRole('heading');
   expect(button).toBeInTheDocument();
 });
//  it('renders the correct text', () => {
//    const { getByRole } = render(<Button {...defaultProps} text="click me" />);
//    expect(getByRole('button')).toHaveTextContent(/click me/i);
//  });
//  it('calls correct function on click', () => {
//    const onClick = jest.fn();
//    const { getByText } = render(
//      <Button {...defaultProps} onClick={onClick} />,
//    );
//    fireEvent.click(getByText(defaultProps.text));
//    expect(onClick).toHaveBeenCalled();
//  });
});

describe('heading', () => {
  it('renders the heading', () => {
    render(<FiltersForm />);
    const button = screen.getByRole('heading');
    expect(button).toBeInTheDocument();
  });
 });

 describe('<Modal>', () => {

  it('Should render the modal content and form after click on filter', () => {
    render(<FiltersForm />);
    const button = screen.getByRole('heading');
    fireEvent.click(button);

    let filter=screen.getByText("Filters");
    expect(filter).toBeInTheDocument();
    let form=screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it('checkboxes default to be false', () => {
    render(<FiltersForm />);
    const button = screen.getByRole('heading');
    fireEvent.click(button);

    let tcheckbox=screen.getByTestId("tcheckbox");
    expect(tcheckbox).toBeInTheDocument();
    expect(tcheckbox.checked).toEqual(false);
  });

  // it('modal content should disappear after click on close', () => {
  //   let testdata= {
  //     operators:[],
  //     connections:[]
  //   };
  //   render(<FiltersForm filters={testdata} />);
  //   const button = screen.getByRole('heading');
  //   fireEvent.click(button);
  //   // const close = screen.getByRole('switch');
  //   // const close=screen.getByRole("button", {name: "Close"});
  //   const close=screen.getByLabelText('Close');
  //   expect(close).toBeInTheDocument();
  //   // const body=screen.getByRole('body');
  //   expect(document.body.className).toEqual('modal-open');

  //   fireEvent.click(close);
  //   expect(document.body.className).not.toEqual('modal-open');

  //   // let setFilters=jest.fn((e)=>{e});
  //   // await fireEvent.click(close);

  //   // let form = screen.queryByRole("form");
  //   // expect(form).toBeNull();

  //   // let filter=screen.getByText("Filters");
  //   // expect(filter).not.toBeInTheDocument();
  // });


 });