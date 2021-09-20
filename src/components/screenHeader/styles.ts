import { makeStyles } from '@material-ui/core/styles';
import { Widgets } from '@material-ui/icons';

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
            width: '40%'
        },
        '& h1': {
            fontSize: '2rem'
        }
    }
}));