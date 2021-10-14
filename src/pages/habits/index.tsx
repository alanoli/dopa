import React from 'react';

import Head from 'next/head';

import { withAuth } from '../../hooks/useAuth';
import HabitsListScreen from '../../screens/habits/HabitsListScreen';

const List = () => {
    return (
        <>
            <Head>
                <title>Dopa | Login</title>
            </Head>
            <HabitsListScreen />
        </>
    )
}

export default withAuth(List);