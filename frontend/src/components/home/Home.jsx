import Scoreboard from '../scoreboard/Scoreboard';

function Home() {
	return (
		<>
			<Scoreboard url={'http://127.0.0.1:3002/scoreboard/1'} />
			<Scoreboard url={'http://127.0.0.1:3003/scoreboard/2'} />
		</>
	);
}

export default Home;
