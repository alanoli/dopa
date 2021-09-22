import React from 'react';
import DefaultButton from '@material-ui/core/Button';
import { useStyles } from './styles';

interface ButtonProps {
    children: React.ReactNode,
    variant?: string
}

const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
    const classes = useStyles();

    return (
        <>
            <DefaultButton
                variant="contained"
                classes={classes}
                {...props}
            >
                {children}
            </DefaultButton>
        </>
    )
}

export default Button;