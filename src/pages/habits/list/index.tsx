import React from 'react';
import MenuDrawer from '../../../components/drawer/Drawer';
import ScreenHeader from '../../../components/screenHeader/ScreenHeader';
import Button from '../../../components/button';
import HabitCardBig from '../../../components/habits/HabitCardBig';

import { useStyles } from '../styles';

const List = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <MenuDrawer />
            <ScreenHeader
                title={'Lista'}
                subtitle={'Hábitos'}
            />
            <Button>Novo hábito</Button>
            <section className={classes.habitsList}>
                <HabitCardBig name={"Acordar cedo"} imageUrl={"/habits_images/wakeupearly.png"} />
            </section>
        </div>
    )
}

export default List;