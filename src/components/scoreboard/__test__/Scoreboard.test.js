import { render, screen, fireEvent } from '@testing-library/react';
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

describe('Test if input fields and add game button are working', () => {
	it('should be able to input text on Home Team input field', () => {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		fireEvent.change(inputHomeTeamElement, { target: { value: 'testing' } });
		expect(inputHomeTeamElement.value).toBe('testing');
	});

	it('should be able to input text on Away Team input field', () => {
		render(<Scoreboard />);
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		fireEvent.change(inputAwayTeamElement, { target: { value: 'testing' } });
		expect(inputAwayTeamElement.value).toBe('testing');
	});

	it('add new game button should be disabled when both input fields are empty', () => {
		render(<Scoreboard />);
		const buttonElement = screen.getByRole('button', { name: 'add new game' });
		expect(buttonElement).toBeDisabled();
	});

	it("add new button shouldn't be disabled when both input fields are not empty", () => {
		render(<Scoreboard />);
		const buttonElement = screen.getByRole('button', { name: 'add new game' });
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');

		fireEvent.change(inputHomeTeamElement, { target: { value: 'testing' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'testing' } });

		expect(buttonElement).not.toBeDisabled();
	});

	it('should have empty input field for Home Team when add new game button is clicked', () => {
    render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });
    
		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Germany' } });
		fireEvent.click(buttonElement);
		expect(inputHomeTeamElement.value).toBe('');
	});

	it('should have empty input field for Away Team when add new game button is clicked', () => {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'testing' } });
		fireEvent.click(buttonElement);
		expect(inputAwayTeamElement.value).toBe('');
	});

	it('should add a new game to scoreboard when add new game button is clicked', () => {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const divElement = screen.getByText('Germany 0 - 0 Spain');
		expect(divElement).toBeInTheDocument();
	});
});

