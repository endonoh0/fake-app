import { useReducer } from 'react';
import { addSpacing } from '../helpers/addSpacing';
import { validateCardNumber } from '../helpers/validateCardNumber';

/** Reducer accepts an action type and returns the current state, dispatch pair. */

/** Action types */
const SET_VALUES = 'SET_VALUES';

/** Reducer switch statements */
const reducer = (state, action) => {
  switch (action.type) {
    case SET_VALUES:
      return { ...state, values: action.value };
    default:
      throw new Error(`App::reducer::error - Invalid action type: ${action.type}`);
  }
};

/** Return App initial state */
const initApp = () => {
  return {
		values: '',
  };
};

const useAppData = () => {
  const [state, dispatch] = useReducer(reducer, initApp());

  // Set methods for each state
  const setValues = (values) => dispatch({ type: SET_VALUES, value: values });

	const handleChange = (event) => {
		let newValues = event.target.value;

		if (newValues.length > 19) return;
		if (!newValues) setValues('');

		const isValid = validateCardNumber(newValues);
		if (isValid) {
			newValues = addSpacing(newValues, 4);
			setValues(newValues);
		}
	}

  return {
    state,
		handleChange
  }
};

export default useAppData;
