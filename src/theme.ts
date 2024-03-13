import { createTheme } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
    typography: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 13,
    },
    palette: {
        background: {
            default: grey[100],
        },
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
