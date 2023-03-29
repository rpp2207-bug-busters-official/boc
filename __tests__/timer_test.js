import { render, screen, fireEvent } from '@testing-library/react'
import Timer from '../components/Timer.js';
import chargeTime from '../helper_functions/chargeTime.js';
import '@testing-library/jest-dom'

// comment so I can update

// describe('Timer', () => {

//   it('renders Timer on the page', () => {
//     render(<Timer />);

//     expect(screen.getByTestId("select-charge-type")).toBeInTheDocument();
//     // expect(screen.getByTestId("act-rating")).toBeInTheDocument();
//   });

//   it('renders the charge type select dropdown', () => {
//     render(<Timer />);

//     expect(screen.getByTestId("charge-type-select")).toBeInTheDocument();

//   });

//   it('opens an email form when selected', () => {
//     render(<Timer />);

//     const inputEmail = screen.getByTestId("input-email-form");

//     fireEvent.click(inputEmail);

//     expect(screen.getByTestId("add-email-for-notify")).toBeInTheDocument();

//   });

//   // it('starts the charger timer', () => {
//   //   render(<Timer />);

//   //   const startCharge = screen.getByTestId("start-charge");

//   //   fireEvent.click(startCharge);

//   //   expect(screen.getByTestId("timer-running")).toBeInTheDocument();

//   // });

// })

describe('Charge Timer', () => {
  it('returns the correct value for a charge time', () => {

    const expected = 720;

    const actual = chargeTime({
      batteryCapacity: 3.7,
      currentPerecentage: 50,
      chargePower: 5,
      desiredCharge: 75
    });

    expect(actual).toBe(expected);

  });
})