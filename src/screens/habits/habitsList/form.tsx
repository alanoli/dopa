import React, { useState } from 'react';

import { Field, Form } from 'react-final-form';

import TextField from '../../../components/textfield/TextField';
import Button from '../../../components/button';

import {
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Box,
    Grid
} from '@material-ui/core';

const HabitsForm = () => {

    const [controlType, setControlType] = useState(null);

    const handleCreateHabit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Form
                onSubmit={(data) => handleCreateHabit(data)}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    name="name"
                                    component={TextField}
                                    label="Nome do hábito"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="control_type"
                                    label="Tipo de controle"
                                >
                                    {({ input, meta, placeholder }) => (
                                        <TextField
                                            select
                                            value={controlType}
                                            onChange={(e) => setControlType(e.target.value)}
                                            input={input}
                                            meta={meta}
                                            placeholder={placeholder}
                                        >
                                            <option>
                                                {"Sim/Não"}
                                            </option>
                                        </TextField>
                                    )}
                                </Field>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default HabitsForm;