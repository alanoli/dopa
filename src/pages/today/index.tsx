import React from 'react';

import { withAuth } from '../../hooks/useAuth';
import TodayScreen from '../../screens/today/TodayScreen';

const Habits = () => {
    return (
        <>
            <TodayScreen />
        </>
    )
}

export default withAuth(Habits);