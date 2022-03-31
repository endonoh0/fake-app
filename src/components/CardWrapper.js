import React from 'react';

import { Card, styled } from '@mui/material';
import { BLACK } from '../constants/colors';

const StyledCard = styled(Card)({
	minWidth: 345,
	borderRadius: '10px',
	border: `${BLACK} 1px solid`,
});

const CardWrapper = (props) => {

  return (
		<StyledCard>
			{props.children}
		</StyledCard>
  );
}

export default CardWrapper;
