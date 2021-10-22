import React from 'react';
import { useStyles } from './styles';
import { HABIT_STATUS } from '../../../enums/habits';

import useHabitCalendarDb, { TODAY } from '../../../services/useHabitCalendarDb';
import moment from 'moment';

import { HabitsCardInput } from '../../../types';

const HabitCard: React.FC<HabitsCardInput> = ({ habitState, onChange }) => {
    const classes = useStyles();

    const {
        id,
        title,
        habitType,
        status
    } = habitState;

    const {
        updateDayHabits
    } = useHabitCalendarDb();

    const onUpdate = async () => {
        let newStatus: HABIT_STATUS;
        if (status == HABIT_STATUS.DONE) {
            newStatus = HABIT_STATUS.PENDING;
        } else {
            newStatus = HABIT_STATUS.DONE;
        }
        await updateDayHabits(TODAY, id, { status: newStatus, editedAt: moment().format() });
        onChange();
    }

    return (
        <div className={`${classes.container} ${status}`} onClick={onUpdate}>
            <div className={classes.habitCardText}>
                <p>{title}</p>
            </div>
            <div className={classes.habitCardImage}>
                <img src={habitType} alt="" />
                {/* {imageUrl == null ?
                    :
                    <img src={imageUrl} alt="" />
                } */}
            </div>


        </div >
    )
}

export default HabitCard;