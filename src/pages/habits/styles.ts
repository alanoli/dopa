import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',

        padding: '2rem'
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
    }
}))