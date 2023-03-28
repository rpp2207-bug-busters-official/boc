import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FiltersForm from './FiltersForm.js';

// const defaultProps = {
//  onClick: jest.fn(),
//  text: 'Submit',
// };

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