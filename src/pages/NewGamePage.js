import React from 'react';
import { Button } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

export default function NewGamePage() {
	const { changePageTo, removePlayer, players } = useGame();

	const handleAddButton = (event) => {
		changePageTo('addPlayer');
	};

	const handleRemoveButton = (event) => {
		removePlayer(event.target.id);
	};

	const handleStart = (event) => {
		changePageTo('roundStart');
	};

	return (
		<div>
			<h2>New Game</h2>

			{players.map((player) => (
				<h6 key={player.name}>
					{player.name}
					<Button id={player.name} variant="contained" color="primary" onClick={handleRemoveButton}>
						Remove
					</Button>
				</h6>
			))}

			<Button variant="contained" color="primary" onClick={handleAddButton}>
				Add Player
			</Button>

			<br></br>
			<br></br>

			<Button variant="contained" color="primary" onClick={handleStart}>
				NEXT
			</Button>
		</div>
	);
}
