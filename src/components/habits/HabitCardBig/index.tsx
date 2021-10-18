import React, { useState } from 'react';
import { useStyles } from './styles';

import { Dialog } from '../../../components/dialog';
import HabitsForm from '../../../screens/habits/form';

import { HabitsFormInput } from '../../../types';

const HabitCardBig: React.FC<HabitsFormInput> = ({ habitState, onClose }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { imageUrl, title } = habitState;

    return (
        <>
            <div onClick={() => setOpen(true)} className={classes.container}>
                <div className={classes.habitCardImage}>
                    {imageUrl == null ?
                        <img src={'/habits_images/wakeupearly.png'} alt="" />
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
                    habitState={habitState}
                />
            </Dialog>
        </>
    )
}

export default HabitCardBig;