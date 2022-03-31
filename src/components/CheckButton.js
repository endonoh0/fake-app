import React from 'react';
import PropTypes from 'prop-types';

import { Button, lighten, styled, Typography } from '@mui/material';

import { BLACK } from '../constants/colors';

const StyledButton = styled(Button)({
	width: '100%',
	height: '50px',
	marginTop: '15px',
	fontSize: '16px',
	textAlign: 'center',
	textTransform: 'capitalize',
	borderRadius: '10px',
	backgroundColor: BLACK,
	"&:hover": {
		backgroundColor: lighten(BLACK, 0.2)
	},
});

const CheckButton = (props) => {

	return (
		<StyledButton
			variant='contained'
			onClick={props.onClick}
		>
			<Typography variant='paragraph1'><b>Check</b></Typography>
		</StyledButton>
	)
}

CheckButton.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default CheckButton;
