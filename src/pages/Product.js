import * as React from 'react';
import Link from "@mui/material/Link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function product(){
    return(
        <Card>
            <CardMedia>

            </CardMedia>
            <CardContent>
                <Typography>
                    this is card
                </Typography>
            </CardContent>
        </Card>
    );
}