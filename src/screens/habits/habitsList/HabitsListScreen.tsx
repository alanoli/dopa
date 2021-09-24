import React, { useState, useEffect } from 'react';
import MenuDrawer from '../../../components/drawer/Drawer';
import ScreenHeader from '../../../components/screenHeader/ScreenHeader';
import Button from '../../../components/button';
import HabitCardBig from '../../../components/habits/HabitCardBig';

import { useStyles } from './styles';
import { Dialog } from '../../../components/dialog';
import useHabitDb from '../../../services/useHabitDb';

import {
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Box
} from '@material-ui/core';

import steps from '../steps';

const HabitsListScreen = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({ loading: true, data: null });
    const { getAllHabits } = useHabitDb();

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getData = async () => {
        try {
            const habits = await getAllHabits();
            setData({
                loading: false,
                data: habits
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={classes.container}>
            <MenuDrawer />
            <ScreenHeader
                title={'Lista'}
                subtitle={'Hábitos'}
            />
            <Button onClick={() => setOpen(true)}>Novo hábito</Button>
            <div className={classes.habitsList}>
                {!data.loading ?
                    <>
                        {data.data.map((item) => {
                            return (
                                <HabitCardBig
                                    name={item.title}
                                    imageUrl={"/habits_images/wakeupearly.png"}
                                />
                            )
                        })}
                    </>
                    :
                    <>Loading data</>
                }
            </div>
            <Dialog
                title={"Novo hábito"}
                onSubmit={() => console.log("submiting")}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Stepper activeStep={activeStep} orientation={"vertical"}>
                    {steps.map((step, index) => {
                        return <Step key={index}>
                            <StepLabel>
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                {step.description}
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            onClick={handleNext}
                                        // sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                        // sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    })}
                </Stepper>
            </Dialog>
        </div>
    )
}

export default HabitsListScreen