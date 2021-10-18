import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../styles/themes/theme';

export const useStyles = makeStyles((theme: ITheme) => ({
    root: {
        borderRadius: '10px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.quaternary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main
        }
    },
}))