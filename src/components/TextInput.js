import React from 'react';
import PropTypes from 'prop-types';

import { TextField, styled, InputAdornment, Typography, Button } from '@mui/material';

import { BLACK, DARK_ORANGE, GREY, LIGHT_GREY } from '../constants/colors';

const StyledTextInput = styled(TextField)((props) => ({
	borderTop: props.error ? `1px solid ${DARK_ORANGE}` : `1px solid ${BLACK}`,
	borderBottom: props.error ? `1px solid ${DARK_ORANGE}` : props.value ? `1px solid ${BLACK}` : 'unset',
	'& .MuiOutlinedInput-root': {
	  '&.Mui-focused fieldset': {
			 borderWidth: '0px',
    }
	},
	'& .MuiOutlinedInput-input': {
		color: props.value ? GREY : LIGHT_GREY,
	},
	'& .MuiOutlinedInput-notchedOutline': {
		border: 'unset',
	},
}));

const StyledRemoveButton = styled(Button)({
	width: '100%',
	minWidth: '100%',
	borderRadius: '20px',
});

const TextInput = (props) => {

	return (
		<StyledTextInput
			type="text"
			size='medium'
			autoFocus
			fullWidth
			InputProps={{
				endAdornment: props.value && <InputAdornment position="end">
					<StyledRemoveButton variant='string' onClick={props.onReset}>
						<Typography sx={{ color: BLACK }}>X</Typography>
					</StyledRemoveButton>
					</InputAdornment>
			}}
			{...props}
		/>
	)
}

TextInput.propTypes = {
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
};

export default TextInput;
