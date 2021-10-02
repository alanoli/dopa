import React from 'react';
import Button from '../../components/button';
import { Field, Form } from 'react-final-form';
import TextField from '../../components/textfield/TextField';

import { Grid } from '@material-ui/core';

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
            <Form
                onSubmit={(data) => signIn(data.user, data.password)}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    name="user"
                                    component={TextField}
                                    label="Nome do hábito"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="password"
                                    component={TextField}
                                    label="Nome do hábito"
                                />
                            </Grid>
                        </Grid>
                        {/* <Button onClick={() => signIn('alancesar2007@gmail.com', 'dopastg')}> */}
                        <Button onClick={handleSubmit}>
                            Login
                        </Button>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default Login;