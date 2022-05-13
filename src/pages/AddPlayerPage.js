import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

// Components
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';

export default function AddPlayerPage() {
	const [nameExist, setNameExist] = React.useState(false);
	const [playerName, setPlayerName] = React.useState('');

	const { changePageTo, players, addPlayer } = useGame();

	const handleInputChange = (event) => {
		setPlayerName(event.target.value);
	};

	const handlePlayerAdd = (event) => {
		addPlayer(playerName);
		changePageTo('newGame');
	};

	const handleKeyPress = (event) => {
		if (event.key !== 'Enter') return;
		if (!nameExist && playerName && playerName.length >= 3) handlePlayerAdd();
	};

	useEffect(() => {
		if (players.find((player) => player.name === playerName)) setNameExist(true);
		else setNameExist(false);
	}, [playerName, players, nameExist]);

	return (
		<Stack
			direction="column"
			justifyContent="space-evenly"
			spacing={4}
			paddingX={4}
			style={{ minHeight: '100vh' }}
		>
			<Header title={`Player ${players.length + 1}`} subtitle="Enter Name" />

			<Stack direction="column" alignItems="center" spacing={1}>
				<TextField
					value={playerName}
					label="Player Name"
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					autoFocus
				/>
				{nameExist && (
					<Typography variant="caption" color="error">
						Name already exists
					</Typography>
				)}
			</Stack>

			<Stack direction="column" alignItems="center" spacing={1}>
				<Button disabled={nameExist || !playerName || playerName.length < 3} onClick={handlePlayerAdd}>
					ADD
				</Button>
			</Stack>
		</Stack>
	);
}
