import React from 'react';
import { Button } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

export default function RoundStartPage() {
	const { changePageTo, round } = useGame();

	return (
		<div>
			<h2>Round {round}</h2>

			<Button variant="contained" color="primary" onClick={() => changePageTo('roundProgress')}>
				START
			</Button>
		</div>
	);
}
