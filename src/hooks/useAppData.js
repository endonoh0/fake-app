import { useReducer } from 'react';
import { addSpacing, validateCardNumbers, sumCardNumbers } from '../helpers';

/** Reducer accepts an action type and returns the current state, dispatch pair. */

/** Action types */
const SET_VALUES = 'SET_VALUES';
const SET_LAST_NUMBER = 'SET_LAST_NUMBER';
const SET_TEXT = 'SET_TEXT';
const SET_ERROR = 'SET_ERROR';

/** Reducer switch statements */
const reducer = (state, action) => {
  switch (action.type) {
    case SET_VALUES:
      return { ...state, values: action.value };
    case SET_LAST_NUMBER:
      return { ...state, lastNumber: action.value };
    case SET_TEXT:
      return { ...state, text: action.value };
    case SET_ERROR:
      return { ...state, error: action.value };
    default:
      throw new Error(`App::reducer::error - Invalid action type: ${action.type}`);
  }
};

// Constants
const MAX_CARD_LENGTH = 19;
const SPACE_EVERY = 4;
const sumNumbers = ['5', '2'];

/** Return App initial state */
const initApp = () => {
  return {
		values: '',
		lastNumber: '',
		text: '',
		error: false,
  };
};

const useAppData = () => {
  const [state, dispatch] = useReducer(reducer, initApp());

  // Set methods for each state
  const setValues = (values) => dispatch({ type: SET_VALUES, value: values });
  const setLastNumber = (lastNumber) => dispatch({ type: SET_LAST_NUMBER, value: lastNumber });
  const setText = (text) => dispatch({ type: SET_TEXT, value: text });
  const setError = (error) => dispatch({ type: SET_ERROR, value: error });

	const handleChange = (event) => {
		let newValues = event.target.value;

		if (!newValues) {
			setValues('');
			return;
		}

		if (newValues.length < MAX_CARD_LENGTH) {
			setLastNumber('');
		}

		const isValid = validateCardNumbers(newValues, MAX_CARD_LENGTH);
		if (!isValid) {
			return;
		} else {
			newValues = addSpacing(newValues, SPACE_EVERY);
			setValues(newValues);
		}

		const newLastNumber = newValues[MAX_CARD_LENGTH - 1];
		if (newValues.length === MAX_CARD_LENGTH && newLastNumber) {
			setLastNumber(newLastNumber);
			return;
		}
	}

	const handleClick = (e) => {
		if (state.values.length < MAX_CARD_LENGTH) {
			setError(true);
			setText('Invalid number');
			return;
		}

		let newText = 'Your balance is $';

		const numbers = state.values.slice().split(' ').join('').substring(0, 12);
		newText += sumCardNumbers(numbers, state.lastNumber, sumNumbers);

		setText(newText);
		setError(false);
		return;
	}

  return {
    state,
		handleChange,
		handleClick,
  }
};

export default useAppData;
