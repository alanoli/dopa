import React, { useEffect, useState } from 'react';
import MenuDrawer from '../../components/drawer/Drawer';
import HabitCard from '../../components/habits/HabitCard';
import ScreenHeader from '../../components/screenHeader/ScreenHeader';
import Button from '../../components/button';

import useHabitCalendarDb from '../../services/useHabitCalendarDb';

import { useStyles } from './styles';

const HabitsScreen = () => {
    const classes = useStyles();
    const { getTodayHabits } = useHabitCalendarDb();

    const [data, setData] = useState({ loading: true, data: null });
    const [percentage, setPercentage] = useState(0);

    const getData = async () => {
        setData({
            loading: false,
            data: await getTodayHabits()
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
                            <h5>{`${percentage}%`}</h5>
                            <p>concluídos</p>
                        </section>
                        <section className={classes.habitsList}>
                            {data.data.map((item, index) => {
                                return (
                                    <HabitCard
                                        key={index}
                                        name={item.title}
                                        id={item.id}
                                        imageUrl={'/habits_images/wakeupearly.png'}
                                        status={item.status}
                                    />
                                )
                            })}
                        </section>
                        <Button>Demais períodos</Button>
                    </>
                    :
                    <>Loading data</>
            }
        </div>
    )
}

export default HabitsScreen;