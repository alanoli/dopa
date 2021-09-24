import React from 'react';
import { useStyles } from './styles';
import { HABIT_STATUS } from '../../../enums/habits';

interface HabitCardProps {
    name: string
    imageUrl?: string
    status?: HABIT_STATUS
}

const HabitCard: React.FC<HabitCardProps> = ({ name, imageUrl, status }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
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


        </div>
    )
}

export default HabitCard;