import React, { useState } from 'react';
import Router from 'next/router';

import Button from '../../components/button';
import { Field, Form } from 'react-final-form';
import TextField from '../../components/textfield/TextField';

import { Grid, Box } from '@material-ui/core';

import { useAuth } from '../../hooks/useAuth';

import { useStyles } from './styles';

const Login = () => {
    const { signIn } = useAuth();
    const classes = useStyles();

    // TODO: make wrong password a toastr
    const [wrongPass, setWrongPass] = useState(false);

    const handleSubmit = async (data) => {
        const submitResult = await signIn(data.user, data.password);
        if (submitResult == "Authentication error") {
            setWrongPass(true);
        } else {
            Router.push("/habits");
        }
    }

    return (
        <div className={classes.container}>
            <h1>dopa</h1>
            <img src="/dopa_logo.svg" alt="" />
            <p>Gerencie seus hábitos e metas num só app</p>
            <Form
                onSubmit={(data) => handleSubmit(data)}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    name="user"
                                    component={TextField}
                                    label="Email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="password"
                                >
                                    {({ input, meta, placeholder }) => (
                                        <TextField
                                            input={input}
                                            meta={meta}
                                            type={'password'}
                                            placeholder={placeholder}
                                            label="Senha"
                                        />
                                    )}
                                </Field>
                            </Grid>
                            <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                                <Button onClick={handleSubmit}>
                                    Login
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                )
                }
            </Form >
            {wrongPass ? <>< p > Senha incorreta! Tente novamente</p ></> : <></>}
        </div >
    )
}

export default Login;