import React from 'react';
import Head from 'next/head';

import { withAuth } from '../../hooks/useAuth';
import TodayScreen from '../../screens/today/TodayScreen';

const Habits = () => {
    return (
        <>
            <Head>
                <title>Dopa | Login</title>
            </Head>
            <TodayScreen />
        </>
    )
}

export default withAuth(Habits);