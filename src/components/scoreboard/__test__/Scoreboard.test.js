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

describe('Test if input fields and buttons are working', () => {
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

		const headingElement = screen.getByRole('heading', {
			name: 'Germany 0 - 0 Spain',
			level: 2,
		});
		expect(headingElement).toBeInTheDocument();
	});

	it('should have a finish button when a new game is added', () => {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const updateButtonElement = screen.getByText('finish');
		expect(updateButtonElement).toBeInTheDocument();
	});

	it('should have an input field to update home team score for each game', () => {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const finishButtonElement = screen.getByPlaceholderText('Home Score');
		expect(finishButtonElement).toBeInTheDocument();
	});

	it('should have an input field to update away team score for each game', () => {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const finishButtonElement = screen.getByPlaceholderText('Away Score');
		expect(finishButtonElement).toBeInTheDocument();
	});

	it('should render multiple games correctly', () => {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		fireEvent.change(inputHomeTeamElement, { target: { value: 'a' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'b' } });
		fireEvent.click(buttonElement);

		fireEvent.change(inputHomeTeamElement, { target: { value: 'c' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'd' } });
		fireEvent.click(buttonElement);

		const divElements = screen.getAllByTestId('game-container');
		expect(divElements.length).toBe(3);
	});
});

describe('test if update fields are working', () => {
	it('should be able to input on Home Team input field', () => {
		render(<Scoreboard />);

		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const inputHomeScoreElement = screen.getByPlaceholderText('Home Score');
		fireEvent.change(inputHomeScoreElement, { target: { value: '1' } });
		expect(inputHomeScoreElement.value).toBe('1');
	});

	it('should be able to input on Away Team input field', () => {
		render(<Scoreboard />);

		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const inputAwayScoreElement = screen.getByPlaceholderText('Away Score');
		fireEvent.change(inputAwayScoreElement, { target: { value: '1' } });
		expect(inputAwayScoreElement.value).toBe('1');
	});

	it("shouldn't be able to go below 0 on Home Team update field", ()=> {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const inputHomeScoreElement = screen.getByPlaceholderText('Home Score');
		fireEvent.change(inputHomeScoreElement, { target: { value: '-1' } });
		expect(inputHomeScoreElement).not.toBe('-1')
	})

	it("shouldn't be able to go below 0 on Away Team update field", () => {
		render(<Scoreboard />);
		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const inputHomeScoreElement = screen.getByPlaceholderText('Home Score');
		fireEvent.change(inputHomeScoreElement, { target: { value: '-1' } });
		expect(inputHomeScoreElement).not.toBe('-1');
	});

	it('should be able to update on Home Team Score', () => {
		render(<Scoreboard />);

		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const inputHomeScoreElement = screen.getByPlaceholderText('Home Score');
		fireEvent.change(inputHomeScoreElement, { target: { value: '1' } });
		const headingElement = screen.getByRole('heading', {
			name: 'Germany 1 - 0 Spain',
			level: 2,
		});
		expect(headingElement).toBeInTheDocument();
	});

	it('should be able to update on Away Team Score', () => {
		render(<Scoreboard />);

		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		const inputAwayScoreElement = screen.getByPlaceholderText('Away Score');
		fireEvent.change(inputAwayScoreElement, { target: { value: '1' } });
		const headingElement = screen.getByRole('heading', {
			name: 'Germany 0 - 1 Spain',
			level: 2,
		});
		expect(headingElement).toBeInTheDocument();
	});

	it("shouldn't be able to update other game's Home Team Score", () => {
		render(<Scoreboard />);

		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Argentina' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'France' } });
		fireEvent.click(buttonElement);

		const inputHomeScoreElements = screen.getAllByPlaceholderText('Home Score');
		fireEvent.change(inputHomeScoreElements[0], { target: { value: '1' } });

		const headingElement = screen.getByRole('heading', {
			name: 'Argentina 0 - 0 France',
			level: 2,
		});
		expect(headingElement).toBeInTheDocument()
	});

	it("shouldn't be able to update other game's Away Team Score", () => {
		render(<Scoreboard />);

		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Argentina' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'France' } });
		fireEvent.click(buttonElement);

		const inputAwayScoreElements = screen.getAllByPlaceholderText('Away Score');
		fireEvent.change(inputAwayScoreElements[0], { target: { value: '1' } });

		const headingElement = screen.getByRole('heading', {
			name: 'Argentina 0 - 0 France',
			level: 2,
		});
		expect(headingElement).toBeInTheDocument();
	});
});

describe('test if finish game button is working', () => {
	it('should be able to delete a specific game', () => {
		render(<Scoreboard />);

		const inputHomeTeamElement = screen.getByPlaceholderText('Home Team');
		const inputAwayTeamElement = screen.getByPlaceholderText('Away Team');
		const buttonElement = screen.getByRole('button', { name: 'add new game' });

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Germany' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Spain' } });
		fireEvent.click(buttonElement);

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Argentina' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'France' } });
		fireEvent.click(buttonElement);

		fireEvent.change(inputHomeTeamElement, { target: { value: 'Morocco' } });
		fireEvent.change(inputAwayTeamElement, { target: { value: 'Croatia' } });
		fireEvent.click(buttonElement);

		const finishButtonElements = screen.getAllByRole('button', {
			name: 'finish',
		});

		fireEvent.click(finishButtonElements[1]);

		const headingElement1 = screen.getByRole('heading', {
			name: 'Germany 0 - 0 Spain',
			level: 2,
		});
		const headingElement2 = screen.queryByRole('heading', {
			name: 'Argentina 0 - 0 France',
			level: 2,
		});
		const headingElement3 = screen.getByRole('heading', {
			name: 'Morocco 0 - 0 Croatia',
			level: 2,
		});

		expect(headingElement1).toBeInTheDocument();
		expect(headingElement2).not.toBeInTheDocument();
		expect(headingElement3).toBeInTheDocument();
	});
});
