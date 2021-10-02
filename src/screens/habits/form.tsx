import React, { useState } from 'react';

import { Field, Form } from 'react-final-form';

import TextField from '../../components/textfield/TextField';
import Button from '../../components/button';

import useHabitDb from '../../services/useHabitDb';

import {
    Box,
    Grid
} from '@material-ui/core';

const HabitsForm = ({ onClose, habitState }) => {

    const [controlType, setControlType] = useState(null);
    const { newHabit, deleteHabit } = useHabitDb();
    const handleSubmitHabit = (data) => {
        if (habitState) {
            // edit habit
        } else {
            newHabit(data);
        }
        onClose(true);
    }

    const handleHabitDelete = () => {
        console.log(habitState.id)
        deleteHabit(habitState.id);
        onClose(true);
    }

    return (
        <div>
            <Form
                onSubmit={(data) => handleSubmitHabit(data)}
                initialValues={habitState}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    name="title"
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
                                            label="Tipo de controle"
                                        >
                                            <option key={1} value={"Sim/Não"}>
                                                {"Sim/Não"}
                                            </option>
                                        </TextField>
                                    )}
                                </Field>
                            </Grid>
                            <Grid item xs={20} gridGap={5}>
                                <Box sx={{ display: 'flex', gap: '1rem' }}>
                                    <Button onClick={handleSubmit}>OK</Button>
                                    <Button onClick={onClose}>Cancelar</Button>
                                    {habitState ?
                                        <Button onClick={handleHabitDelete}>DELETAR</Button>
                                        : <></>}
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default HabitsForm;