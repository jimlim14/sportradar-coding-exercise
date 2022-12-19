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

	function handleNewGameChange(e) {
		const { name, value } = e.target;
		setNewGame((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function handleScoreChange(e, gameId) {
		const { name, value } = e.target;
		const copiedGames = [...games];
		const newGames = copiedGames.map((game) => {
			if (game.id === gameId)
				return {
					...game,
					[name]: value,
				};
			else return game;
		});
		setGames(newGames);
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

	function deleteGame(gameId) {
		setGames((prev) => {
			return prev.filter((game) => game.id !== gameId);
		});
	}

	function buttonDisable() {
		return newGame.homeTeam && newGame.awayTeam ? false : true;
	}

	function summaryButtonDisable(){
		return games.length ? false : true;
	}

	return (
		<div>
			<h1>Scoreboard</h1>
			<button disabled={summaryButtonDisable()}>Get Summary</button>
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
							<div data-testid='game-container'>
								<h2>
									{game.homeTeam} {game.homeTeamScore} - {game.awayTeamScore}{' '}
									{game.awayTeam}
								</h2>
								<button onClick={() => deleteGame(game.id)}>finish</button>
							</div>

							<input
								type='number'
								placeholder='Home Score'
								name='homeTeamScore'
								onChange={(e) => handleScoreChange(e, game.id)}
							/>
							<input
								type='number'
								placeholder='Away Score'
								name='awayTeamScore'
								onChange={(e) => handleScoreChange(e, game.id)}
							/>
						</div>
					))}
			</div>
		</div>
	);
}

export default Scoreboard;
