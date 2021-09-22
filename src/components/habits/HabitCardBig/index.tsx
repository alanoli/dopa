import React from 'react';
import { useStyles } from './styles';

interface HabitCardBigProps {
    name: string
    imageUrl?: string
    status?: HABIT_STATUS
}

const HabitCardBig: React.FC<HabitCardBigProps> = ({ name, imageUrl, status }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.habitCardImage}>
                {imageUrl == null ?
                    <img src={'/habits_images/default.png'} alt="" />
                    :
                    <img src={imageUrl} alt="" />
                }
            </div>
            <div className={classes.habitCardText}>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default HabitCardBig;