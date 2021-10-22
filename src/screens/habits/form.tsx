import React, { useState, useEffect } from 'react';

import { Field, Form } from 'react-final-form';

import TextField from '../../components/textfield/TextField';
import Button from '../../components/button';

import useHabitDb from '../../services/useHabitDb';
import useHabitCalendarDb from '../../services/useHabitCalendarDb';
import useImageDb from '../../services/useImageDb';

import { Habit, HabitsFormInput, Image } from '../../types';

import moment from 'moment';

import {
    Box,
    Grid
} from '@material-ui/core';

const HabitsForm: React.FC<HabitsFormInput> = ({ onClose, habitState }) => {

    const [habitType, setHabitType] = useState(null);
    const [habitTypes, setHabitTypes] = useState([] as Image[]);
    const required = (value: string) => (value ? undefined : "Necessário");

    const {
        newHabit,
        deleteHabit,
        updateHabit
    } = useHabitDb();
    const { addNewHabitToCalendar } = useHabitCalendarDb();
    const { getTypes } = useImageDb();

    const handleSubmitHabit = async (data: Habit) => {
        if (habitState) {
            await updateHabit(data.id, data);
        } else {
            const newHabitRecord = await newHabit(data);
            addNewHabitToCalendar(newHabitRecord.id);
        }
        onClose();
    }

    const handleHabitDelete = () => {
        deleteHabit(habitState.id);
        onClose();
    }

    useEffect(() => {
        const getImageTypes = async () => {
            const types: Image[] = await getTypes();
            setHabitTypes(types);
        }
        getImageTypes();
    }, []);

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
                                    name="controlType"
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
                            <Grid item xs={12}>
                                <Field
                                    name="habitType"
                                >
                                    {({ input, meta, placeholder }) => (
                                        <TextField
                                            select
                                            input={input}
                                            value={habitType}
                                            meta={meta}
                                            placeholder={placeholder}
                                            onChange={(e) => setHabitType(e.target.value)}
                                            label="Tipo de hábito"
                                        >
                                            {habitTypes.map((item) => {
                                                return (
                                                    <option key={item.id} value={item.path}>
                                                        {item.type}
                                                    </option>
                                                )
                                            })}
                                        </TextField>
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