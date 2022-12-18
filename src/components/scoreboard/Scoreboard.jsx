import { useState } from 'react';

function Scoreboard() {
	const [game, setGame] = useState({
		id: 1,
		homeTeam: '',
		awayTeam: '',
		homeTeamScore: 0,
		awayTeamScore: 0,
	});
	const [games, setGames] = useState([]);

	function handleChange(e) {
		const { name, value } = e.target;
		setGame((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function handleSubmitForm(e) {
		e.preventDefault();
		setGames((prev) => [...prev, game]);
		setGame((prev) => ({
			id: prev.id + 1,
			homeTeam: '',
			awayTeam: '',
			homeTeamScore: 0,
			awayTeamScore: 0,
		}));
	}

	function buttonDisable() {
		return game.homeTeam && game.awayTeam ? false : true;
	}

	return (
		<>
			<h1>Scoreboard</h1>
			<div>
				<form onSubmit={handleSubmitForm}>
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

			<div>
				{games &&
					games.map((game, i) => (
						<div key={i}>
							<h2>
								{game.homeTeam} {game.homeTeamScore} - {game.awayTeamScore}{' '}
								{game.awayTeam}
							</h2>
							<button>update</button>
						</div>
					))}
			</div>

		</>
	);
}

export default Scoreboard;
