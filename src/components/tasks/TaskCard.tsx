import React from 'react';

interface TaskCardProps {
    taskName: string;
}

const TaskCard = ({ taskName }) => {
    return (
        <>
            {taskName}
        </>
    )
}

export default TaskCard;