import '../styles/globals.css';
import ThemeContext from '../hooks/useTheme';
import { AuthContextProvider } from '../hooks/useAuth';

import initializeFirebase from '../firebase/firebaseInit';

function MyApp({ Component, pageProps }) {

	initializeFirebase();

	return (
		<AuthContextProvider>
			<ThemeContext>
				<Component {...pageProps} />
			</ThemeContext>
		</AuthContextProvider>
	)
}

export default MyApp;
