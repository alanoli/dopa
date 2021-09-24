import React from 'react';

import { withAuth } from '../../hooks/useAuth';
import HabitsScreen from '../../screens/habits/HabitsScreen';

const Habits = () => {
    return (
        <>
            <HabitsScreen />
        </>
    )
}

export default withAuth(Habits);