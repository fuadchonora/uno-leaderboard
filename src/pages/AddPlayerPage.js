import React from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

export default function AddPlayerPage() {
	const [playerName, setPlayerName] = React.useState('');

	const { changePageTo, players, addPlayer } = useGame();

	const handleInputChange = (event) => {
		setPlayerName(event.target.value);
	};

	const handlePlayerAdd = (event) => {
		addPlayer(playerName);
		changePageTo('newGame');
	};

	return (
		<div>
			<h2>Player {players.length + 1}</h2>

			<TextField
				value={playerName}
				placeholder="Player Name"
				inputProps={{ inputMode: 'alphabet', pattern: '[a-z]*' }}
				onChange={handleInputChange}
			/>

			<br></br>
			<br></br>

			<Button variant="contained" color="primary" onClick={handlePlayerAdd}>
				ADD
			</Button>
		</div>
	);
}
