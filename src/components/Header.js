import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

export default function Header({ title, subtitle }) {
	return (
		<Stack direction="column" alignItems="flex-start">
			<Typography variant="h3" component="h2">
				{title}
			</Typography>

			{subtitle && (
				<Typography variant="h5" component="h2">
					{subtitle}
				</Typography>
			)}
		</Stack>
	);
}

export { Header };
