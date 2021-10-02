import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../styles/themes/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
    container: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        gap: '2rem',

        padding: '2rem',
        margin: 'auto',
        '& button': {
            alignSelf: 'center'
        },
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.quaternary.main
    },
    progress: {
        alignSelf: 'left',
        textAlign: 'center',
        marginRight: 'auto',
        '& h5': {
            fontSize: '1.5rem',
        },
        '& p': {
            fontSize: '1.0rem'
        }
    },
    habitsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    }
}))