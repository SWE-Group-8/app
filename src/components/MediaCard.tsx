import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 480,
  },
  media: {
    height: 640,
    width: 480
  },
})

interface Props{
    image: string;
    title: string;
    description: string;
}

export default function MediaCard({ image, title, description}: Props) {
  const classes = useStyles();
  return (
    <Card variant="outlined" style={{border: '1px solid'}}className={classes.root}>
      <CardActionArea>
        <CardMedia 
        className={classes.media} 
        image={image} 
        title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}