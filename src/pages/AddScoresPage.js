import React from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

export default function AddScoresPage() {
	const [playerScores, setPlayerScores] = React.useState({});
	const { calculate, round, players } = useGame();

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setPlayerScores({ ...playerScores, [id]: parseInt(value) });
	};

	const handleCalculate = (event) => {
		calculate(playerScores);
	};

	return (
		<div>
			<h2>Round {round}</h2>
			<h4>Add Scores</h4>

			{players.map((player) => (
				<TextField
					key={player.name}
					id={player.name}
					inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
					onChange={handleInputChange}
					label={player.name}
					variant="outlined"
				/>
			))}

			<Button variant="contained" color="primary" onClick={handleCalculate}>
				CALCULATE
			</Button>
		</div>
	);
}
