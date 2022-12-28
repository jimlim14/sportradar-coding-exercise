import { useState, useEffect } from 'react';
import Scoreboard from '../scoreboard/Scoreboard';

function Home() {
	const [tournaments, setTournaments] = useState([]);

	useEffect(() => {
		fetch(`http://127.0.0.1:3001/tournaments`)
			.then((res) => res.json())
			.then((foundTournaments) => setTournaments(foundTournaments));
	}, []);
	return (
		<>
			{tournaments &&
				tournaments.map((tournament) => (
					<Scoreboard
						key={tournament.id}
						tournamentId={tournament.id}
						tournamentName={tournament.name}
					/>
				))}
		</>
	);
}

export default Home;
