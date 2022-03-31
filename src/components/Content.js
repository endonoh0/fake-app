import React from 'react';

import { Grid, Typography } from '@mui/material';

import Logo from './Logo';
import ContentWrapper from './ContentWrapper';

const Content = () => {

  return (
		<ContentWrapper>
			<Grid container sx={{ justifyContent: 'space-between', marginLeft: '0' }}>
				<Typography variant='h6'>Balance Checker</Typography>
				<Logo />
			</Grid>
			<Typography variant='body2'>Enter your card number to check it's balance</Typography>
		</ContentWrapper>
  );
}

export default Content;
