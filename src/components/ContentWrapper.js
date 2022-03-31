import React from 'react';

import { CardContent, styled } from '@mui/material';

import { DESERT_STORM, LIGHT_BROWN } from '../constants/colors';

const StyledCardContent = styled(CardContent)((props) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: props.align,
	backgroundColor: props.align ? DESERT_STORM : LIGHT_BROWN,
}));

const ContentWrapper = (props) => {

  return (
		<StyledCardContent align={props.alignItems}>
			{props.children}
		</StyledCardContent>
  );
}

export default ContentWrapper;
