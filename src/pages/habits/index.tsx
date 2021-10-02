import React from 'react';

import { withAuth } from '../../hooks/useAuth';
import HabitsListScreen from '../../screens/habits/HabitsListScreen';

const List = () => {
    return (
        <>
            <HabitsListScreen />
        </>
    )
}

export default withAuth(List);