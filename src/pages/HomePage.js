import React from 'react';
import { Button } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

export default function HomePage() {
	const { startGame } = useGame();

	const handlePlay = (event) => {
		startGame();
	};

	return (
		<div>
			<h2>WELCOME</h2>
			<h1>UNO</h1>
			<h3>Leaderboard</h3>

			<Button variant="contained" color="primary" onClick={handlePlay}>
				PLAY
			</Button>
		</div>
	);
}
