import { useState } from 'react';

function Scoreboard() {
	const [newGame, setNewGame] = useState({
		id: 1,
		homeTeam: '',
		awayTeam: '',
		homeTeamScore: 0,
		awayTeamScore: 0,
	});
	const [games, setGames] = useState([]);

	function handleNewGameChange(e, gameId) {
		const { name, value } = e.target;
		setNewGame((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function handleSubmitForm(e) {
		e.preventDefault();
		setGames((prev) => [...prev, { time: Date.now(), ...newGame }]);
		setNewGame((prev) => ({
			id: prev.id + 1,
			homeTeam: '',
			awayTeam: '',
			homeTeamScore: 0,
			awayTeamScore: 0,
		}));
	}

	function buttonDisable() {
		return newGame.homeTeam && newGame.awayTeam ? false : true;
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
						value={newGame.homeTeam}
						onChange={handleNewGameChange}
					/>
					<input
						type='text'
						placeholder='Away Team'
						name='awayTeam'
						value={newGame.awayTeam}
						onChange={handleNewGameChange}
					/>
					<button disabled={buttonDisable()}>add new game</button>
				</form>
			</div>

			<div>
				{games &&
					games.map((game, i) => (
						<div key={i}>
							<div>
								<h2>
									{game.homeTeam} {game.homeTeamScore} - {game.awayTeamScore}{' '}
									{game.awayTeam}
								</h2>
								<button>finish</button>
							</div>

							<input
								type='number'
								placeholder='Home Score'
								name='homeTeamScore'
								onChange={''}
							/>
							<input
								type='number'
								placeholder='Away Score'
								name='awayTeamScore'
								onChange={''}
							/>
						</div>
					))}
			</div>
		</>
	);
}

export default Scoreboard;
