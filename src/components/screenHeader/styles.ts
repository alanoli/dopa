import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',

        '& h2': {
            fontSize: '1rem'
        },
        '& div': {
            borderTop: '1px solid gray',
            width: '40%',
            paddingTop: '0.2rem',
            paddingBottom: '0.2rem'
        },
        '& h1': {
            fontSize: '2rem'
        }
    }
}));