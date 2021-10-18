import React, { useState } from 'react';

import { Field, Form } from 'react-final-form';

import TextField from '../../components/textfield/TextField';
import Button from '../../components/button';

import useHabitDb from '../../services/useHabitDb';
import useHabitCalendarDb from '../../services/useHabitCalendarDb';

import { Habit, HabitsFormInput } from '../../types';

import moment from 'moment';

import {
    Box,
    Grid
} from '@material-ui/core';

const HabitsForm: React.FC<HabitsFormInput> = ({ onClose, habitState }) => {

    const required = (value: string) => (value ? undefined : "Necessário");

    const { newHabit,
        deleteHabit,
        updateHabit
    } = useHabitDb();
    const { addNewHabitToCalendar } = useHabitCalendarDb();

    const handleSubmitHabit = async (data: Habit) => {
        if (habitState) {
            updateHabit(data.id, data);
        } else {
            const newHabitRecord = await newHabit(data);
            addNewHabitToCalendar(newHabitRecord.id);
        }
        onClose(false);
    }

    const handleHabitDelete = () => {
        deleteHabit(habitState.id);
        onClose();
    }

    return (
        <div>
            <Form
                onSubmit={(data) => handleSubmitHabit({ ...data, createdAt: moment().format() } as Habit)}
                initialValues={habitState}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field validate={required}
                                    name="title"
                                    component={TextField}
                                    label="Nome do hábito"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="control_type"
                                >
                                    {({ input, meta, placeholder }) => (
                                        <TextField
                                            value={"Sim/Não"}
                                            meta={meta}
                                            placeholder={placeholder}
                                            label="Tipo de controle"
                                            disabled
                                        />
                                    )}
                                </Field>
                            </Grid>
                            <Grid item>
                                <Box sx={{ display: 'flex' }}>
                                    <Button onClick={handleSubmit}>OK</Button>
                                    <Button onClick={() => onClose(false)}>Cancelar</Button>
                                    {habitState ?
                                        <Button
                                            onClick={handleHabitDelete}
                                            style={{ backgroundColor: "#fc5185" }}
                                        >
                                            DELETAR
                                        </Button>
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