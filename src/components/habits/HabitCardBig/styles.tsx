import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../../styles/themes/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
    container: {
        display: 'flex',
        height: '40vh',
        minWidth: '10rem',
        position: 'relative',

        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

        borderRadius: '15px',
        overflow: 'hidden'
    },
    habitCardText: {
        width: '100%',

        position: 'absolute',
        bottom: '2rem',

        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: theme.palette.quaternary.main,
        padding: '0.3rem',
        fontSize: '1.5rem'
    },
    habitCardImage: {
        width: '100%',
        height: '100%',
        '& img': {
            height: '100%',
            // maxHeight: '100%',
            width: 'auto',
            objectFit: 'contain',
            opacity: 0.9
        },
    }
}))