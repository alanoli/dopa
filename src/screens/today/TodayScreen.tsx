import React, { useEffect, useState } from 'react';
import MenuDrawer from '../../components/drawer/Drawer';
import HabitCard from '../../components/habits/HabitCard';
import ScreenHeader from '../../components/screenHeader/ScreenHeader';
// import Button from '../../components/button';
import moment from 'moment';

import useHabitCalendarDb from '../../services/useHabitCalendarDb';
import { HABIT_STATUS } from '../../enums/habits';

import { useStyles } from './styles';

const HabitsScreen = () => {
    const classes = useStyles();
    const { getTodayHabits } = useHabitCalendarDb();

    const [data, setData] = useState({ loading: true, data: null, percentage: "0" });

    const getData = async () => {
        const habitsData = await getTodayHabits();
        const percentage = calculatePercentage(habitsData);
        console.log(habitsData);
        setData({
            loading: false,
            data: habitsData,
            percentage: percentage,
        });
        console.log("Setting new data");
    }

    const calculatePercentage = (habitsData) => {
        const successCount = habitsData.reduce((acc, value) => {
            if (value.status == HABIT_STATUS.DONE) return acc + 1;
            else return acc;
        }, 0);
        return (100 * successCount / habitsData.length).toFixed(0);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={classes.container}>
            <MenuDrawer />
            <ScreenHeader
                title={`Hoje, ${moment().format("DD/MM")}`}
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
                            {data.data.map((item, index) => {
                                return (
                                    <HabitCard
                                        key={index}
                                        habitState={item}
                                        onChange={getData}
                                    />
                                )
                            })}
                        </section>
                        {/* <Button>Demais períodos</Button> */}
                    </>
                    :
                    <>Loading data</>
            }
        </div>
    )
}

export default HabitsScreen;