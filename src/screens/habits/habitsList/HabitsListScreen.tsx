import React, { useState, useEffect } from 'react';
import MenuDrawer from '../../../components/drawer/Drawer';
import ScreenHeader from '../../../components/screenHeader/ScreenHeader';
import Button from '../../../components/button';
import HabitCardBig from '../../../components/habits/HabitCardBig';

import { useStyles } from './styles';
import { Dialog } from '../../../components/dialog';
import useHabitDb from '../../../services/useHabitDb';

import HabitsForm from './form';

const HabitsListScreen = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({ loading: true, data: null });
    const { getAllHabits } = useHabitDb();

    const getData = async () => {
        try {
            const habits = await getAllHabits();
            setData({
                loading: false,
                data: habits
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={classes.container}>
            <MenuDrawer />
            <ScreenHeader
                title={'Lista'}
                subtitle={'Hábitos'}
            />
            <Button onClick={() => setOpen(true)}>Novo hábito</Button>
            <div className={classes.habitsList}>
                {!data.loading ?
                    <>
                        {data.data.map((item) => {
                            return (
                                <HabitCardBig
                                    name={item.title}
                                    imageUrl={"/habits_images/wakeupearly.png"}
                                />
                            )
                        })}
                    </>
                    :
                    <>Loading data</>
                }
            </div>
            <Dialog
                title={"Novo hábito"}
                onSubmit={() => console.log("submiting")}
                open={open}
                onClose={() => setOpen(false)}
            >
                <HabitsForm />
            </Dialog>
        </div>
    )
}

export default HabitsListScreen