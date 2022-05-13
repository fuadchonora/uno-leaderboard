import React from 'react';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';

// Context
import { useGame } from '../contexts/GameContext';

// Components
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';

export default function AddScoresPage() {
	const [erros, setErros] = React.useState([]);
	const [playerScores, setPlayerScores] = React.useState({});
	const { calculate, round, players } = useGame();

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setPlayerScores({ ...playerScores, [id]: parseInt(value) });
	};

	const hasError = () => {
		const _erros = [];
		if (Object.keys(playerScores).length !== players.length) _erros.push(`Please enter all player's scores`);

		//check if any player has a core of 0
		let hasZero = false;
		Object.keys(playerScores).forEach((key) => {
			if (playerScores[key] === 0) hasZero = true;
		});
		if (!hasZero) _erros.push('No player has a core of 0');

		setErros(_erros);

		return _erros.length > 0;
	};

	const handleCalculate = (event) => {
		if (hasError()) return;
		calculate(playerScores);
	};

	return (
		<Stack
			direction="column"
			justifyContent="space-evenly"
			spacing={4}
			paddingX={4}
			style={{ minHeight: '100vh' }}
		>
			<Header title={`Round ${round}`} subtitle="Enter Scores" />

			<Stack direction="column" alignItems="center" spacing={1}>
				{players.map(({ name }, idx) => (
					<TextField
						key={name}
						id={name}
						type="number"
						onChange={handleInputChange}
						label={name}
						autoFocus={idx === 0}
					/>
				))}

				{erros.map((error) => (
					<Typography key={error} variant="caption" color="error">
						{error}
					</Typography>
				))}
			</Stack>

			<Stack direction="column" alignItems="center" spacing={1}>
				<Button variant="contained" color="primary" onClick={handleCalculate}>
					CALCULATE
				</Button>
			</Stack>
		</Stack>
	);
}
