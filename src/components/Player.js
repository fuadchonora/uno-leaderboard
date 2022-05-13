import React from 'react';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonRemoveRoundedIcon from '@mui/icons-material/PersonRemoveRounded';

const useStyles = makeStyles({
	stack: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 18,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
		width: '260px',
	},
});

export default function Player({ playerName, playerScore, removePlayer }) {
	const classes = useStyles();

	return (
		<Stack direction="row" justifyContent="space-between" alignItems="center" className={classes.stack}>
			<Typography variant="body" component="h2">
				{playerName}
			</Typography>

			{removePlayer && (
				<IconButton onClick={() => removePlayer(playerName)}>
					<PersonRemoveRoundedIcon />
				</IconButton>
			)}

			{playerScore && (
				<Typography variant="body" component="h2">
					{playerScore}
				</Typography>
			)}
		</Stack>
	);
}

export { Player };
