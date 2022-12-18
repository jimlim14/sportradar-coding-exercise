import { render, screen } from '@testing-library/react';
import Scoreboard from '../Scoreboard';

describe('Test when scoreboard component is loaded', () => {
  it('should have a heading called Scoreboard', () => {
    render(<Scoreboard />);
    const headingElement = screen.getByRole('heading', {name: /scoreboard/i});
    expect(headingElement).toBeInTheDocument();
  });
  
  it('should have 2 input fields', () => {
    render(<Scoreboard />);
    const inputElements = screen.getAllByRole('textbox');
    expect(inputElements.length).toBe(2);
  });
  
  it('should have a button for adding new game', () => {
    render(<Scoreboard />);
    const buttonElement = screen.getByRole('button', {name: 'add new game'});
    expect(buttonElement).toBeInTheDocument();
  });

})