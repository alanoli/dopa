import { createTheme, Theme, ThemeOptions } from '@material-ui/core/styles';
import { Palette, PaletteColor } from '@material-ui/core/styles/createPalette';

interface IPalette extends Palette {
    terciary: PaletteColor;
    quaternary: PaletteColor;
}

interface IThemeOptions extends ThemeOptions {
    palette: IPalette;
}

export interface ITheme extends Theme {
    palette: IPalette;
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#40514E',
        },
        secondary: {
            main: '#2F89FC',
        },
        terciary: {
            main: '#30E3CA',
        },
        quaternary: {
            main: '#F5F5F5',
        },
    },
} as IThemeOptions);

export default theme;
