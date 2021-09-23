import React, { useEffect, useState } from 'react';
import MenuDrawer from '../../components/drawer/Drawer';
import HabitCard from '../../components/habits/HabitCard';
import ScreenHeader from '../../components/screenHeader/ScreenHeader';
import Button from '../../components/button';

import { withAuth } from '../../hooks/useAuth';
import { useDb } from '../../hooks/useDb';

import { useStyles } from './styles';

const Habits = () => {
    const classes = useStyles();

    const [data, setData] = useState({ loading: true, data: null });
    const [percentage, setPercentage] = useState(0);
    const { getDocuments } = useDb();

    const getData = async () => {
        try {
            const docs = await getDocuments("habits");
            setData({
                loading: false,
                data: docs
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(data);

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
                                        imageUrl={'/habits_images/wakeupearly.png'}
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

export default withAuth(Habits);