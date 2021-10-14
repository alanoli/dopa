import React, { useEffect } from 'react';
import Head from 'next/head';
import { withAuth } from '../hooks/useAuth';

import Router from 'next/router';

function Home() {
	useEffect(() => {
		Router.push("/today");
	});

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="PManagement" />
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet" />
			</Head>
			my app
		</div>
	)
}

export default withAuth(Home);