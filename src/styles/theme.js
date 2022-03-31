import { createTheme } from '@mui/material/styles';
import { BLACK } from '../constants/colors';

let Theme = createTheme({
	typography: {
		h6: {
      fontFamily: 'Roboto',
			fontWeight: 700,
			fontSize: '28px',
			fontColor: BLACK,
			lineHeight: '32.81px',
			width: '242.29px',
			height: '36.51px',
    },
		body2: {
      fontFamily: 'Roboto Mono',
			fontWeight: 400,
			fontSize: '14px',
		}
	},
	components: {
    MuiGrid: {
			styleOverrides: {
        root: {
          margin: '0.5rem',
					width: 'initial',
        },
      },
    },
    MuiOutlinedInput: {
			styleOverrides: {
        root: {
					borderRadius: '0',
        },
				input: {
					fontFamily: 'Roboto Mono',
					fontSize: '14px',
					fontWeight: 400,
					lineHeight: '23.5px',
				}
      },
    },
	}
});

export default Theme;
