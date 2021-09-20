import React, { useEffect } from 'react';
import MenuDrawer from '../../components/drawer/Drawer';
import HabitCard from '../../components/habits/HabitCard';
import ScreenHeader from '../../components/screenHeader/ScreenHeader';

import { useStyles } from './styles';

const Habits = () => {
    const classes = useStyles();
    let data = {
        percentage: 0
    };

    useEffect(() => {
        data.percentage = 66;
    }, []);

    const today = new Date();

    return (
        <div className={classes.container}>
            <MenuDrawer />
            <ScreenHeader
                title={`Hoje, ${today.getDate()}/${today.getMonth()}`}
                subtitle={'Hábitos'}
            />
            <section className={classes.progress}>
                <h5>{`${data.percentage}%`}</h5>
                <p>concluídos</p>
            </section>
            <section>
                <HabitCard name={"Acordar cedo"} />
                <HabitCard name={"Gratidão"} />
                <HabitCard name={"Exercícios"} />
            </section>
            <button>Demais períodos</button>
        </div>
    )
}

export default Habits;