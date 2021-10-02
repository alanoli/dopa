import React, { useState } from 'react';
import { useStyles } from './styles';

import { HABIT_STATUS } from '../../../enums/habits';

import { Dialog } from '../../../components/dialog';
import HabitsForm from '../../../screens/habits/form';

interface Habit {
    title: string
    imageUrl?: string
    status?: HABIT_STATUS
}

interface HabitCardBigProps {
    habitData: Habit
    onClose: (withRefetch: boolean) => void
}

const HabitCardBig: React.FC<HabitCardBigProps> = ({ habitData, onClose }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { imageUrl, title } = habitData;

    return (
        <>
            <div onClick={() => setOpen(true)} className={classes.container}>
                <div className={classes.habitCardImage}>
                    {imageUrl == null ?
                        <img src={'/habits_images/default.png'} alt="" />
                        :
                        <img src={imageUrl} alt="" />
                    }
                </div>
                <div className={classes.habitCardText}>
                    <p>{title}</p>
                </div>
            </div>
            <Dialog
                title={"Editar hábito"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <HabitsForm
                    onClose={(withRefetch: boolean) => onClose(withRefetch)}
                    habitState={habitData}
                />
            </Dialog>
        </>
    )
}

export default HabitCardBig;