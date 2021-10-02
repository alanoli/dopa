import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../styles/themes/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
    container: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '2rem',

        padding: '2rem',
        margin: 'auto',
        '& button': {
            marginRight: 'auto'
        },
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.quaternary.main
    },
    habitsList: {
        display: 'flex',
        gap: '1rem',

        flexDirection: 'row',
        overflowX: 'scroll',

        paddingBottom: '1rem',
    }
}))