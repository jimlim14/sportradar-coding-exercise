import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scoreboard from '../Scoreboard';

describe('Test when scoreboard component is loaded', () => {
	it('should have a heading called Scoreboard', () => {
		render(<Scoreboard />);
		const headingElement = screen.getByRole('heading', { name: /scoreboard/i });
		expect(headingElement).toBeInTheDocument();
	});

	it('should have Home Team input field', () => {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		expect(inputHomeTeamElement).toBeInTheDocument();
	});

  it('should have Away Team input field', () => {
		render(<Scoreboard />);
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		expect(inputAwayTeamElement).toBeInTheDocument();
	});

	it('should have a button for adding new game', () => {
		render(<Scoreboard />);
		const buttonElement = screen.getByRole('button', { name: 'add new game' });
		expect(buttonElement).toBeInTheDocument();
	});
});
