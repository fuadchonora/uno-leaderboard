import React from 'react';
import { Stack } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

// Components
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export default function RoundProgressPage() {
	const { changePageTo, round } = useGame();

	return (
		<Stack
			direction="column"
			justifyContent="space-evenly"
			spacing={4}
			paddingX={4}
			style={{ minHeight: '100vh' }}
		>
			<Header title={`Round ${round}`} subtitle="In Progress" />

			<Stack direction="column" alignItems="center" spacing={1}></Stack>

			<Stack direction="column" alignItems="center" spacing={1}>
				<Button onClick={() => changePageTo('addScores')}>ROUND FINISHED</Button>
			</Stack>
		</Stack>
	);
}
