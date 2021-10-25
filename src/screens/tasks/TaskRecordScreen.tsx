import React from 'react';

import MenuDrawer from '../../components/drawer/Drawer';
import ScreenHeader from '../../components/screenHeader/ScreenHeader';

import { useStyles } from './styles';

const TaskRecordScreen = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <MenuDrawer />
            <ScreenHeader
                title={'Registro'}
                subtitle={'Tarefas'}
            />
        </div>
    )
}

export default TaskRecordScreen;