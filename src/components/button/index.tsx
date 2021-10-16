import React from 'react';
import DefaultButton, { ButtonProps } from '@material-ui/core/Button';
import { useStyles } from './styles';

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick, ...props }) => {
    const classes = useStyles();

    return (
        <>
            <DefaultButton
                classes={classes}
                onClick={onClick}
                disabled={disabled}
                {...props}
            >
                {children}
            </DefaultButton>
        </>
    )
}

export default Button;