import React from 'react';
import { Stack } from '@mui/material';
import { IconButton } from '@mui/material';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';

// Context
import { useGame } from '../contexts/GameContext';

// Components
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Player } from '../components/Player';

export default function NewGamePage() {
	const { changePageTo, removePlayer, players } = useGame();

	const handleAddButton = (event) => {
		changePageTo('addPlayer');
	};

	const handleStart = (event) => {
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
			<Header title="New Game" subtitle={players.length > 2 ? 'All Players' : 'Add Players'} />

			<Stack direction="column" alignItems="center" spacing={1}>
				{players.map(({ name }) => (
					<Player key={name} playerName={name} removePlayer={removePlayer}></Player>
				))}

				<IconButton color="primary" onClick={handleAddButton}>
					<PersonAddAltRoundedIcon />
				</IconButton>
			</Stack>

			<Stack direction="column" alignItems="center" spacing={1}>
				<Button disabled={players.length < 3} onClick={handleStart}>
					NEXT
				</Button>
			</Stack>
		</Stack>
	);
}
