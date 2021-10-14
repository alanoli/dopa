import React from 'react';
import Head from 'next/head';

import ScreenLogin from '../../screens/login/ScreenLogin';

const Login = () => {

    return (
        <>
            <Head>
                <title>Dopa | Login</title>
            </Head>
            <ScreenLogin />
        </>
    )
}

export default Login;