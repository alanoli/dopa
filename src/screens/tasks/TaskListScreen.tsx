import React, { useEffect, useState } from 'react';

import MenuDrawer from '../../components/drawer/Drawer';
import ScreenHeader from '../../components/screenHeader/ScreenHeader';

import Button from '../../components/button';

import { useStyles } from './styles';
import TaskCard from '../../components/tasks/taskcard';

const TaskListScreen = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData([
            { taskName: "Dopa Project" },
            { taskName: "Typescript" },
            { taskName: "Vídeos Youtube" }
        ])
    }, [])

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <MenuDrawer />
            <ScreenHeader
                title={'Cadastro'}
                subtitle={'Tarefas'}
            />
            <Button>Nova tarefa</Button>
            <p>Tarefas</p>
            {data.map((item) => {
                return (
                    <TaskCard taskName={item.taskName} />
                )
            })}
        </div>
    )
}

export default TaskListScreen;