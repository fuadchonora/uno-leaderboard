import React from 'react';
import { Button } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

export default function PlayerCountPage() {
	const { nextPage } = useGame();

	return (
		<div>
			<h3>How Many Players</h3>

			<Button variant="contained" color="primary" onClick={() => nextPage()}>
				NEXT
			</Button>
		</div>
	);
}
