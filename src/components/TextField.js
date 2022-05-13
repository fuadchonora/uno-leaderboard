import React from 'react';
import { TextField as InputField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const labelStyle = {
	color: '#fff',
	fontWeight: 'bold',
	paddingLeft: '18px',
	paddingRight: '18px',
};

const useStyles = makeStyles({
	textField: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 18,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		height: 48,
		outline: 'none',
		paddingBottom: '16px',
		'& .Mui-focused': { fontWeight: 'bold' },
	},
});

export default function TextField(props) {
	const classes = useStyles();
	return (
		<InputField
			variant="standard"
			fullWidth
			{...props}
			className={classes.textField}
			InputProps={{
				disableUnderline: true,
				style: labelStyle,
			}}
			InputLabelProps={{
				style: {
					color: '#fff',
					paddingLeft: '23px',
				},
			}}
		/>
	);
}

export { TextField };
