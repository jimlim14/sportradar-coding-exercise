function Summary({ games }) {
	function sorting() {
		const copiedGames = [...games];
		// copiedGames.sort((a, b) => {
		// 	const totalAScore = +a.homeTeamScore + +a.awayTeamScore;
		// 	const totalBScore = +b.homeTeamScore + +b.awayTeamScore;

		// 	return totalBScore - totalAScore;
		// });

		// copiedGames.sort((a, b) => {
		// 	const totalAScore = +a.homeTeamScore + +a.awayTeamScore;
		// 	const totalBScore = +b.homeTeamScore + +b.awayTeamScore;

		// 	if (totalAScore === totalBScore) return b.time - a.time;
		// 	return 0;
		// });
		// return copiedGames;

		copiedGames.sort((a, b) => {
			const totalAScore = +a.homeTeamScore + +a.awayTeamScore;
			const totalBScore = +b.homeTeamScore + +b.awayTeamScore;
      if (totalAScore === totalBScore) return b.time - a.time;
      return totalBScore > totalAScore ? 1 : -1;
		});
    return copiedGames;
	}

	return (
		<>
			<h1>Summary</h1>
			{sorting().map((game, i) => (
				<div key={game.id}>
					<h2 data-testid='summary-heading'>
						{i + 1}. {game.homeTeam} {game.homeTeamScore} - {game.awayTeamScore}{' '}
						{game.awayTeam}
					</h2>
				</div>
			))}
		</>
	);
}

export default Summary;
