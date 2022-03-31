import React from 'react';

// React components
import { Grid, Box } from '@mui/material';
import CardWrapper from './components/CardWrapper.js';
import CheckButton from './components/CheckButton.js';
import Content from './components/Content.js';
import TextInput from './components/TextInput.js';
import Result from './components/Result.js';

import useAppData from './hooks/useAppData.js';

const App = () => {
	const { state, handleChange, handleClick, handleReset } = useAppData();
	const { values, text, error } = state;

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
			<Box>
				<CardWrapper>
					<Content />
					<TextInput
						value={values}
						error={error}
						onChange={handleChange}
						onReset={handleReset}
						placeholder='xxxx xxxx xxxx xxxx'
					/>
					{ text && <Result text={text} error={error} /> }
				</CardWrapper>
				<CheckButton onClick={handleClick} />
			</Box>
    </Grid>
  );
}

export default App;
