import { render, screen } from '@testing-library/react';
import Summary from '../Summary';

describe('test Summary component', () => {
	const games = [
		{
			id: 1,
			homeTeam: 'Mexico',
			awayTeam: 'Canada',
			homeTeamScore: 0,
			awayTeamScore: 5,
			time: Date.now(),
		},
		{
			id: 2,
			homeTeam: 'Spain',
			awayTeam: 'Brazil',
			homeTeamScore: 10,
			awayTeamScore: 2,
			time: Date.now() + 5000,
		},
		{
			id: 3,
			homeTeam: 'Germany',
			awayTeam: 'France',
			homeTeamScore: 2,
			awayTeamScore: 2,
			time: Date.now() + 10000,
		},
		{
			id: 4,
			homeTeam: 'Uruguay',
			awayTeam: 'Italy',
			homeTeamScore: 6,
			awayTeamScore: 6,
			time: Date.now() + 150000,
		},
		{
			id: 5,
			homeTeam: 'Argentina',
			awayTeam: 'Australia',
			homeTeamScore: 3,
			awayTeamScore: 1,
			time: Date.now() + 20000,
		},
	];
	it('should have a heading called Summary', () => {
		render(<Summary games={games} />);
		const headingElement = screen.getByRole('heading', {
			name: 'Summary',
			level: 1,
		});
		expect(headingElement).toBeInTheDocument();
	});

	it('should pass games as prop to Summary component', () => {
		render(<Summary games={games} />);
		const headingElements = screen.getAllByRole('heading', { level: 2 });
		expect(headingElements.length).toBe(5);
	});

	it('should show a summary of games in progress ordered by their total score, The games with the same total score will be returned ordered by the most recently started match in the scoreboard', () => {
		render(<Summary games={games} />);
		const headingElements = screen.getAllByTestId('testing', { exact: false });
		expect(headingElements.length).toBe(5);
		expect(headingElements[0]).toHaveTextContent('1. Uruguay 6 - 6 Italy');
		expect(headingElements[1]).toHaveTextContent('2. Spain 10 - 2 Brazil');
		expect(headingElements[2]).toHaveTextContent('3. Mexico 0 - 5 Canada');
		expect(headingElements[3]).toHaveTextContent(
			'4. Argentina 3 - 1 Australia'
		);
		expect(headingElements[4]).toHaveTextContent('5. Germany 2 - 2 France');
	});
});
