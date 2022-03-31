import React from 'react';

import { Grid, Box } from '@mui/material';

import Content from './components/Content.js';
import TextInput from './components/TextInput.js';
import useAppData from './hooks/useAppData.js';
import CardWrapper from './components/CardWrapper.js';
import Result from './components/Result.js';
import CheckButton from './components/CheckButton.js';

const App = () => {
	const { state, handleChange, handleClick } = useAppData();
	const { values, text, error } = state;

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
			<Box>
				<CardWrapper>
					<Content />
					<TextInput
						error={error}
						placeholder='xxxx xxxx xxxx xxxx'
						value={values}
						onChange={handleChange}
					/>
					{ text && <Result text={text} error={error} /> }
				</CardWrapper>
				<CheckButton onClick={handleClick} />
			</Box>
    </Grid>
  );
}

export default App;
