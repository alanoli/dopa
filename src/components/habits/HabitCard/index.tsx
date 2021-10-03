import React, { useState } from 'react';
import { useStyles } from './styles';
import { HABIT_STATUS } from '../../../enums/habits';

import useHabitCalendarDb, { TODAY } from '../../../services/useHabitCalendarDb';

interface HabitCardProps {
    id: string;
    name: string;
    imageUrl?: string;
    status?: HABIT_STATUS;
}

const HabitCard: React.FC<HabitCardProps> = ({ id, name, imageUrl, status }) => {
    const classes = useStyles();

    const [cardStatus, setCardStatus] = useState(status);

    const {
        updateDayHabits
    } = useHabitCalendarDb();

    const onUpdate = () => {
        let newStatus: HABIT_STATUS;
        if (cardStatus == HABIT_STATUS.DONE) {
            newStatus = HABIT_STATUS.PENDING;
        } else {
            newStatus = HABIT_STATUS.DONE;
        }
        updateDayHabits(TODAY, id, { status: newStatus });
        setCardStatus(newStatus);
    }

    return (
        <div className={`${classes.container} ${cardStatus}`} onClick={onUpdate}>
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