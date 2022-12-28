import { useState, useEffect } from 'react';
import Summary from '../summary/Summary';
import './scoreboard.css';

function Scoreboard({ url }) {
	const [tournament, setTournament] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((foundGame) => setTournament(foundGame));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='container'>
			{tournament ? (
				<>
					<div>
						<div>
							<h1>{tournament.name} Scoreboard</h1>
						</div>
						{tournament.data.map((game) => (
							<div key={game.id}>
								<div data-testid='game-container' className='game-container'>
									<h2>
										{game.homeTeam} {game.homeTeamScore} - {game.awayTeamScore}{' '}
										{game.awayTeam}
									</h2>
								</div>
							</div>
						))}
					</div>
					<div>
						<Summary games={tournament.data} />
					</div>
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}

export default Scoreboard;
