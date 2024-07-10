import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#FFC107',
        },
        background: {
            default: '#F5F5F5',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    breakpoints: {
        values: {
            sm: 0,
            md: 600,
            lg: 960,
            xl: 1280,
        },
    },
    shape: {
        borderRadius: 10,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: '10px 20px',
                },
            },
        },
    },
     

})