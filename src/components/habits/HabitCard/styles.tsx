import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../../styles/themes/theme';

import { HABIT_STATUS } from '../../../enums/habits';

export const useStyles = makeStyles((theme: ITheme) => ({
    container: {
        display: 'flex',
        height: '4.2rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#E2E2E2',

        borderRadius: '15px',
        overflow: 'hidden',

        [`&.${HABIT_STATUS.DONE}`]: {
            border: '3px solid',
            borderColor: theme.palette.terciary.main
        },
    },
    habitCardText: {
        flex: 3,
        alignSelf: 'center',
        textAlign: 'left',
        textIndent: '15%',
        color: theme.palette.primary.main
    },
    habitCardImage: {
        flex: 1,
        // maxHeight: '100%',
        // maxWidth: '100%',
        '& img': {
            width: '100%',
            heigth: 'auto',
            objectFit: 'contain',
        },
        // '& ::after': {
        //     content: "",
        //     position: 'absolute',
        //     width: '100%',
        //     height: '100%',
        //     // left: '-20px',
        //     backgroundColor: 'blue',
        //     transform: 'rotate(5deg)'
        // }
    }
}))