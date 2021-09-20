import React from 'react';
import { useStyles } from './styles';

export interface ScreenHeaderProps {
    title: string
    subtitle: string
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, subtitle }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h2>{subtitle}</h2>
            <div />
            <h1>{title}</h1>
        </div>
    )
}

export default ScreenHeader;