import { useState } from 'react';

function Scoreboard() {
	const [game, setGame] = useState({
		id: 1,
		homeTeam: '',
		awayTeam: '',
		homeTeamScore: 0,
		awayTeamScore: 0,
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setGame((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function buttonDisable() {
		return game.homeTeam && game.awayTeam ? false : true;
	}

	return (
		<>
			<h1>Scoreboard</h1>
			<div>
				<form action=''>
					<input
						type='text'
						placeholder='Home Team'
						name='homeTeam'
						value={game.homeTeam}
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Away Team'
						name='awayTeam'
						value={game.awayTeam}
						onChange={handleChange}
					/>
					<button disabled={buttonDisable()}>add new game</button>
				</form>
			</div>
		</>
	);
}

export default Scoreboard;
