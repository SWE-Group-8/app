import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EricPic from '../images/Eric-P.jpg';
import JavierPic from '../images/Javier-Rosa.jpg';
const theme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
<<<<<<< Updated upstream
    <Box m={3} pt={3}>
      <Grid>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image= {EricPic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
            <p>Eric Por</p>
            <p>Lead UI</p> 
        </Typography>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image= {JavierPic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
            <p>Eric Por</p>
            <p>Lead UI</p> 
        </Typography>
      </CardActions>
    </Card>
    </Grid>
    </Box>
=======
      <Box
          sx={{
            justify: 'center',
            bgcolor: '#ffe8d6',
            pt: 8,
            pb: 2,
          }}
        >
          <Container maxWidth="sm" >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Meet The Team!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This is Group 8 and what roles each one of us took!
            </Typography>
            
          </Container>
        </Box>
      <Box sx={{ justify: 'center', transform: 'scale(0.8)' }}>
        <Grid container spacing={5} pl={5} column={{ xs: 4, sm: 8, md: 12}}>
          {mediaCards.map((card, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card variant="outlined" style={{ margin: 10}}>
              <CardMedia
              style={{height: 640, width: '100%'}}
              image={card.image} 
              title={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography variant="body2" component="p" style={{
                  color: "#000000"
                }}>
                  {card.description}
                  <Button>
                    <td onClick={() => window.open(card.linkedinLink, "_blank")}>
                      <LinkedInIcon />
                    </td>
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            ))}
        </Grid>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }}/>
>>>>>>> Stashed changes
    </ThemeProvider>
  );
}