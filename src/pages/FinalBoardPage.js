import React from 'react';
import { Button } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

export default function FinalBoardPage() {
	const { startGame, getLeaderboard } = useGame();
	const players = getLeaderboard();

	const handleNewGame = (event) => {
		startGame();
	};

	return (
		<div>
			<h2>Viola 🎉</h2>
			<h4>{`${players[0].name} Wins!`}</h4>

			{players.map((player) => (
				<h6 key={player.name}>
					{player.name}, {player.score}
				</h6>
			))}

			<Button variant="contained" color="primary" onClick={handleNewGame}>
				START NEW GAME
			</Button>
		</div>
	);
}
