import React from 'react';
import PropTypes from 'prop-types';

import { TextField, styled } from '@mui/material';
import { BLACK, GREY, LIGHT_GREY } from '../constants/colors';

const StyledTextInput = styled(TextField)((props) => ({
	borderTop: `1px solid ${BLACK}`,
	'& .MuiOutlinedInput-input': {
		color: props.value ? GREY : LIGHT_GREY,
	}
}));

const TextInput = (props) => {

	return (
		<StyledTextInput
			type="text"
			size='medium'
			fullWidth
			{...props}
		/>
	)
}

TextInput.propTypes = {
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired
};

export default TextInput;
