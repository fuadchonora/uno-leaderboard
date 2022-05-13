import React from 'react';
import { Stack } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

// Components
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Player } from '../components/Player';

export default function RoundBoardPage() {
	const { changePageTo, round, getLeaderboard } = useGame();
	const players = getLeaderboard();

	const handleNext = (event) => {
		changePageTo('roundStart');
	};

	return (
		<Stack
			direction="column"
			justifyContent="space-evenly"
			spacing={4}
			paddingX={4}
			style={{ minHeight: '100vh' }}
		>
			<Header title={`Round ${round}`} subtitle="Leaderboard" />

			<Stack direction="column" alignItems="center" spacing={1}>
				{players.map(({ name, score }) => (
					<Player key={name} playerName={name} playerScore={score} />
				))}
			</Stack>

			<Stack direction="column" alignItems="center" spacing={1}>
				<Button variant="contained" color="primary" onClick={handleNext}>
					NEXT ROUND
				</Button>
			</Stack>
		</Stack>
	);
}
