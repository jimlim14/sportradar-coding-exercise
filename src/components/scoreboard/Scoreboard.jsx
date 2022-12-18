function Scoreboard () {
	return (
		<>
			<h1>Scoreboard</h1>
			<div>
				<form action='' onSubmit={''}>
					<input
						type='text'
						placeholder='Home Team'
						name='homeTeam'
						value={''}
						onChange={''}
					/>
					<input
						type='text'
						placeholder='Away Team'
						name='awayTeam'
						value={''}
						onChange={''}
					/>
					<button>add new game</button>
				</form>
			</div>
		</>
	);
}

export default Scoreboard;
