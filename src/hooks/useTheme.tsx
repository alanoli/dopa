import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/themes/theme';

const ThemeContext = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
};

export default ThemeContext;