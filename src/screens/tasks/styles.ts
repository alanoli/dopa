import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../styles/themes/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
    container: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem',
    }
}))