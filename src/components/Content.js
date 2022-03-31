import React from 'react';

import { CardContent, Grid, styled, Typography } from '@mui/material';

import Logo from './Logo';

const StyledCardContent = styled(CardContent)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	backgroundColor: '#EFE6DD',
});

const Content = () => {

  return (
		<StyledCardContent>
			<Grid container sx={{ justifyContent: 'space-between' }}>
				<Typography variant='h6'>Balance Checker</Typography>
				<Logo />
			</Grid>
			<Typography variant='body2'>Enter your card number to check it's balance</Typography>
		</StyledCardContent>
  );
}

export default Content;
