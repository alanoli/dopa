import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../styles/themes/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
    container: {
        position: 'absolute',
        top: '2rem',
        right: '2rem'
    },
    paper: {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.9,
        color: theme.palette.quaternary.main,
        width: '70%',

        padding: '0.5rem'
    },
    userTitle: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        marginBottom: '5rem',

        '& img': {
            selfAlign: 'left',
            width: '50%',
            height: 'auto'
        },

        '& section': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',

            '& p': {
                fontSize: '1.5rem'
            }
        }
    },
}))