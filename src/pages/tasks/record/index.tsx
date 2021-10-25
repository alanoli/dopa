import React from 'react';
import Head from 'next/head';

import TaskRecordScreen from '../../../screens/tasks/TaskRecordScreen';

const Tasks = () => {

    return (
        <>
            <Head>
                <title>Dopa | Tasks</title>
            </Head>
            <TaskRecordScreen />
        </>
    )
}

export default Tasks;