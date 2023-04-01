import { render, screen } from '@testing-library/react'
import MyActivities from '../components/MyActivities.js';
import '@testing-library/jest-dom'


describe('MyActivites', () => {
  it('renders MyActivities on the page', () => {
    render(<MyActivities />);

    // expect(screen.getByTestId("card-title")).toBeInTheDocument();
    console.log(screen)

  })
})