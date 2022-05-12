import React from 'react';
import { Button } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

export default function RoundProgressPage() {
	const { changePageTo, round } = useGame();

	return (
		<div>
			<h2>Round {round}</h2>
			<h4>In Progress</h4>

			<Button variant="contained" color="primary" onClick={() => changePageTo('addScores')}>
				ROUND FINISHED
			</Button>
		</div>
	);
}
