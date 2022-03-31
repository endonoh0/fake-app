import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

import ContentWrapper from './ContentWrapper';

import { DARK_GREEN, DARK_ORANGE } from '../constants/colors';

const Result = (props) => {

  return (
		<ContentWrapper alignItems='center'>
			<Typography
				sx={{
					fontSize: '14px',
					color: props.error ? DARK_ORANGE : DARK_GREEN,
				}}
			>
				{props.text}
			</Typography>
		</ContentWrapper>
  );
}

Result.propTypes = {
	text: PropTypes.string.isRequired
};


export default Result;
