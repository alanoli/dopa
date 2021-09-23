import React from 'react';
import Button from '../../components/button';

import { useAuth } from '../../hooks/useAuth';

import { useStyles } from './styles';

const Login = () => {
    const { signIn } = useAuth();
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1>dopa</h1>
            <img src="/dopa_logo.svg" alt="" />
            <p>Gerencie seus hábitos e metas num só app</p>
            <Button onClick={() => signIn('alancesar2007@gmail.com', 'dopastg')}>
                Login
            </Button>
        </div>
    )
}

export default Login;