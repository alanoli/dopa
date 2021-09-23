import React from 'react';
import DefaultButton from '@material-ui/core/Button';
import { useStyles } from './styles';

interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    variant?: string
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick, ...props }) => {
    const classes = useStyles();

    return (
        <>
            <DefaultButton
                variant="contained"
                classes={classes}
                onClick={onClick}
                {...props}
            >
                {children}
            </DefaultButton>
        </>
    )
}

export default Button;