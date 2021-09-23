import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../styles/themes/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        alignItems: 'center',
        justifyContent: 'center',

        padding: '2rem',

        minHeight: '100vh',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.quaternary.main,
        '& h1': {
            fontSize: '4rem',
            fontWeight: '400'
        },

        '& p': {
            fontSize: '1.3rem',
            fontWeight: '400',
            textAlign: 'center',
            padding: '0 2rem'
        }
    }
}))