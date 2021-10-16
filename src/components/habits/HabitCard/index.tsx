import React from 'react';
import { useStyles } from './styles';
import { HABIT_STATUS } from '../../../enums/habits';

import useHabitCalendarDb, { TODAY } from '../../../services/useHabitCalendarDb';
import moment from 'moment';

interface HabitCardProps {
    id: string;
    name: string;
    imageUrl?: string;
    status?: HABIT_STATUS;
    onChange: () => void;
}

const HabitCard: React.FC<HabitCardProps> = ({ id, name, imageUrl, status, onChange }) => {
    const classes = useStyles();

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
                <p>{name}</p>
            </div>
            <div className={classes.habitCardImage}>
                {imageUrl == null ?
                    <img src={'/habits_images/default.png'} alt="" />
                    :
                    <img src={imageUrl} alt="" />
                }
            </div>


        </div >
    )
}

export default HabitCard;