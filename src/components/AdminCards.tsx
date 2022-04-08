import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import Link from 'react-router-dom';
import React, { useState } from "react";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
    width: 500
  },
})

interface Props{
    image: string;
    button: string;
    link: string;
}

export default function MediaCard({ image, button, link}: Props) {
  const classes = useStyles();
  return (
    <Card variant="outlined" style={{border: '1px solid'}}className={classes.root}>
      <CardActionArea>
        <CardMedia 
        className={classes.media} 
        image={image} 
        />
        <CardContent> 
            
        </CardContent>

      </CardActionArea>
      <CardActions>
          
            <Button href={link} variant="outlined" size="large" color="inherit">
                {button}
            </Button>
          
      </CardActions>
    </Card>
  )
}