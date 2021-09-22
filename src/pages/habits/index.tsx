import React, { useEffect, useState } from 'react';
import MenuDrawer from '../../components/drawer/Drawer';
import HabitCard from '../../components/habits/HabitCard';
import ScreenHeader from '../../components/screenHeader/ScreenHeader';
import Button from '../../components/button';

import { useStyles } from './styles';

const Habits = () => {
    const classes = useStyles();

    const [data, setData] = useState({ percentage: 0, loading: true });

    const getData = () => {
        setData({
            percentage: 66,
            loading: false
        })
    }

    useEffect(() => {
        getData();
    }, []);

    const today = new Date();

    return (
        <div className={classes.container}>
            <MenuDrawer />
            <ScreenHeader
                title={`Hoje, ${today.getDate()}/${today.getMonth()}`}
                subtitle={'Hábitos'}
            />
            {
                !data.loading ?
                    <>
                        <section className={classes.progress}>
                            <h5>{`${data.percentage}%`}</h5>
                            <p>concluídos</p>
                        </section>
                        <section className={classes.habitsList}>
                            <HabitCard name={"Acordar cedo"} imageUrl={'/habits_images/wakeupearly.png'} />
                            <HabitCard name={"Gratidão"} />
                            <HabitCard name={"Exercícios"} />
                        </section>
                        <Button>Demais períodos</Button>
                    </>
                    :
                    <>Loading data</>
            }
        </div>
    )
}

export default Habits;