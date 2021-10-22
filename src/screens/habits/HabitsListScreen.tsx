import React, { useState, useEffect } from 'react';
import MenuDrawer from '../../components/drawer/Drawer';
import ScreenHeader from '../../components/screenHeader/ScreenHeader';
import Button from '../../components/button';
import HabitCardBig from '../../components/habits/HabitCardBig';

import { useStyles } from './styles';
import { Dialog } from '../../components/dialog';
import useHabitDb from '../../services/useHabitDb';

import HabitsForm from './form';

const HabitsListScreen = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({ loading: true, data: null });
    const { getAllHabits } = useHabitDb();

    const getData = async () => {
        setData({
            loading: false,
            data: await getAllHabits()
        })
    }

    useEffect(() => {
        getData();
    }, []);

    const onClose = (withRefetch: boolean = true) => {
        setOpen(false);
        if (withRefetch) {
            console.log("getting data");
            getData();
        }
    }

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
                                    key={item.id}
                                    habitState={item}
                                    onClose={onClose}
                                />
                            )
                        })}
                    </> : <>Loading data</>
                }
            </div>
            <Dialog
                title={"Novo hábito"}
                open={open}
                onClose={onClose}
            >
                <HabitsForm
                    onClose={onClose}
                />
            </Dialog>
        </div>
    )
}

export default HabitsListScreen