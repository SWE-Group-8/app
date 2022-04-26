import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@mui/material";

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
    linkedinLink: string;
}

export default function MediaCard({ image, title, description, linkedinLink}: Props) {
  const classes = useStyles();
  return (
    <Card variant="outlined" style={{border: '1px solid'}}className={classes.root}>
      <CardActionArea>
        <CardMedia 
        className={classes.media} 
        image={image} 
        title={title}
        />
        <CardContent style={{
          backgroundColor: "#DDBEA9"
        }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p" style={{
            color: "#000000"
          }}>
            {description}
            <Button>
              <td onClick={() => window.open(linkedinLink, "_blank")}>
                <LinkedInIcon />
              </td>
            </Button>
          </Typography>
          
          
        </CardContent>
      </CardActionArea>
    </Card>
  )
}