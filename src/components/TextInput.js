import React from 'react';
import PropTypes from 'prop-types';

import { TextField, styled, InputAdornment, Typography, Button } from '@mui/material';

import { BLACK, DARK_ORANGE, GREY, LIGHT_GREY } from '../constants/colors';

const StyledTextInput = styled(TextField)((props) => ({
	borderTop: props.error ? `1px solid ${DARK_ORANGE}` : `1px solid ${BLACK}`,
	borderBottom: props.error ? `1px solid ${DARK_ORANGE}` : `1px solid ${BLACK}`,
	'& .MuiOutlinedInput-input': {
		color: props.value ? GREY : LIGHT_GREY,
	},
	'& .MuiOutlinedInput-notchedOutline': {
		borderRight: 'unset',
		borderLeft: 'unset',
	},
}));

const TextInput = (props) => {
	return (
		<StyledTextInput
			type="text"
			size='medium'
			autoFocus
			fullWidth
			InputProps={{
				endAdornment: <InputAdornment position="end">
					<Button
					 variant='string'
						sx={{
							borderRadius: '20px',
							minWidth: '100%',
							width: '100%',
						}}
					>
						<Typography sx={{ color: BLACK }}>X</Typography>
					</Button>
					</InputAdornment>,
			}}
			{...props}
		/>
	)
}

TextInput.propTypes = {
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default TextInput;
