import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../styles/themes/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',

        padding: '2rem',
        margin: 'auto',
        '& button': {
            alignSelf: 'center'
        },
        color: theme.palette.primary.main
    },
    progress: {
        alignSelf: 'center',
        textAlign: 'center',
        '& h5': {
            fontSize: '3rem'
        },
        '& p': {
            fontSize: '1.5rem'
        }
    },
    habitsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    }
}))