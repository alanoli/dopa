import React from 'react';
import Head from 'next/head';

import TaskListScreen from '../../screens/tasks/TaskListScreen';

const Tasks = () => {

    return (
        <>
            <Head>
                <title>Dopa | Tasks</title>
            </Head>
            <TaskListScreen />
        </>
    )
}

export default Tasks;