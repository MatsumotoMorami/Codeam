import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import Button from '@mui/material/Button';


export default function UsingColorObject() {
    return (<div>
        <Button variant="contained">Primary</Button>
        <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
            Secondary
        </Button>
    </div>
    );
}