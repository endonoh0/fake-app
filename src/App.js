import React from 'react';

import { Grid } from '@mui/material';

import Header from './components/Content.js';
import TextInput from './components/TextInput.js';
import useAppData from './hooks/useAppData.js';
import CardWrapper from './components/CardWrapper.js';

const App = () => {
	const { state, handleChange } = useAppData();
	const { values } = state;

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
			<CardWrapper>
				<Header />
				<TextInput
					placeholder='xxxx xxxx xxxx xxxx'
					onChange={handleChange}
					value={values}
				/>
			</CardWrapper>
    </Grid>
  );
}

export default App;
