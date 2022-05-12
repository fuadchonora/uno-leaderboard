import React from 'react';
import { Button } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

export default function RoundBoardPage() {
	const { changePageTo, round, getLeaderboard } = useGame();
	const players = getLeaderboard();

	const handleNext = (event) => {
		changePageTo('roundStart');
	};

	return (
		<div>
			<h2>Round {round}</h2>
			<h4>Leaderboard</h4>

			{players.map((player) => (
				<h6 key={player.name}>
					{player.name}, {player.score}
				</h6>
			))}

			<Button variant="contained" color="primary" onClick={handleNext}>
				NEXT ROUND
			</Button>
		</div>
	);
}
