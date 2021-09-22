import '../styles/globals.css';
import ThemeContext from '../hooks/useTheme';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeContext>
			<Component {...pageProps} />
		</ThemeContext>
	)
}

export default MyApp;
