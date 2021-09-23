import React, { useState } from 'react';
import MenuDrawer from '../../../components/drawer/Drawer';
import ScreenHeader from '../../../components/screenHeader/ScreenHeader';
import Button from '../../../components/button';
import HabitCardBig from '../../../components/habits/HabitCardBig';

import { useStyles } from './styles';
import { Dialog } from '../../../components/dialog';

import {
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Box
} from '@material-ui/core';

import steps from './steps';

const List = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

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

    return (
        <div className={classes.container}>
            <MenuDrawer />
            <ScreenHeader
                title={'Lista'}
                subtitle={'Hábitos'}
            />
            <Button onClick={() => setOpen(true)}>Novo hábito</Button>
            <div className={classes.habitsList}>
                <HabitCardBig name={"Acordar cedo"} imageUrl={"/habits_images/wakeupearly.png"} />
                <HabitCardBig name={"Exercícios"} imageUrl={"/habits_images/workout.png"} />
                <HabitCardBig name={"Acordar cedo"} />
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
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
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

export default List;