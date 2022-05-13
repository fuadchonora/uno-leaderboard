import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

// Components
import { Button } from '../components/Button';

export default function HomePage() {
	const { startGame } = useGame();

	const handlePlay = (event) => {
		startGame();
	};

	return (
		<Stack
			direction="column"
			justifyContent="space-evenly"
			alignItems="center"
			spacing={1}
			style={{ minHeight: '100vh' }}
		>
			<Typography variant="h3" component="h2">
				WELCOME
			</Typography>
			<Stack>
				<Typography variant="h2" component="h2">
					UNO
				</Typography>
				<Typography variant="h4" component="h2">
					Leaderboard
				</Typography>
			</Stack>

			<Button onClick={handlePlay}>PLAY</Button>
		</Stack>
	);
}
