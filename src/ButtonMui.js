import * as React from "react";
import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './CssModulMuiButton.css';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { blue, red } from "@mui/material/colors";


const ButtonMuistyled = styled(Button)({
    color: red[400],
});

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "red"
                }
            }
        }
    }
});

const ButtonMui = () => (
    <Card>
        <Title title="Mui Button" />
        <CardContent>
            <Stack direction="row" alignItems="left" marginY={2}>
                <Button variant="contained">MUI STANDARD</Button>
            </Stack>
            <Stack direction="row" alignItems="left" marginY={2}>
                <Button variant="contained" sx={{color: "red",}} >MUI SX STYLES</Button>
            </Stack>
            <Stack direction="row" alignItems="left" marginY={2}>
                <Button variant="contained" className={styles.slider}>MUI REACT CSS MODULE</Button>
            </Stack>
            <Stack direction="row" alignItems="left" marginY={2}>
                {/* <Button variant="contained">MUI STYLED BUTTON</Button> */}
                <ButtonMuistyled variant="contained">Coba</ButtonMuistyled>
            </Stack>
            <Stack direction="row" alignItems="left" marginY={2}>
                <ThemeProvider theme={theme}>
                    <Button variant="contained">MUI THEME</Button>
                </ThemeProvider>
            </Stack>
        </CardContent>
    </Card>
);

export default ButtonMui;