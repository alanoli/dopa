import React, { useState } from 'react';
import { useStyles } from './styles';

import { Dialog } from '../../../components/dialog';
import HabitsForm from '../../../screens/habits/form';

import { HabitsFormInput } from '../../../types';

const HabitCardBig: React.FC<HabitsFormInput> = ({ habitState, onClose }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { title, habitType } = habitState;

    // const onClose = (withRefetch: boolean = true) => {
    //     setOpen(false);
    //     if (withRefetch) {
    //         console.log("getting data");
    //         getData();
    //     }
    // }

    return (
        <>
            <div onClick={() => setOpen(true)} className={classes.container}>
                <div className={classes.habitCardImage}>
                    <img src={habitType} alt="" />
                    {/* {imageUrl == null ?
                        :
                        <img src={imageUrl} alt="" />
                    } */}
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
                    onClose={() => { setOpen(false); onClose() }}
                    habitState={habitState}
                />
            </Dialog>
        </>
    )
}

export default HabitCardBig;