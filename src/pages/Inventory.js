<<<<<<< Updated upstream
import * as React from 'react';
=======
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
>>>>>>> Stashed changes
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import pant from '../images/hat.jpg';

<<<<<<< Updated upstream
import { Component } from 'react';
// import { connect } from 'react-redux' commented out since there is *not* a reference to this yet
=======

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#ffe8d6"
      }
    }
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
>>>>>>> Stashed changes


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/SWE-Group-8">
        Group8 Repo
      </Link>{'  '}
      {new Date().getFullYear()}{'  '}
      
      
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

<<<<<<< Updated upstream
const theme = createTheme({
  palette: {
    background: {
      default: "#ffe8d6"
    }
  }
});

export default function Album() {
=======

  
>>>>>>> Stashed changes
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
<<<<<<< Updated upstream
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#ffe8d6',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Cap Inventory
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We are a company that supplies quality caps that last and look great. BUY ONE TODAY OFFER ONLY LAST FOR THE NEXT 20 MINUTEsS
            </Typography>
            
          </Container>
        </Box>
        <Container sx={{ py: 0 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 2}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={pant}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                    <Typography>
                      Price: 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "#ffe8d6", p: 6 }} component="footer">
        
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Repository and information on the group.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
=======
      <h1>Hottest Items</h1>
      <Paper
        variant="outlined"
        square
        elevation={12}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: '#A5A58D',
        }}
        style={{
          border: '.5px solid'
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{
          border: '.5px solid'
        }}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  Width: 900,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{
          border: '.5px solid'
        }}
        sx={{
          bgcolor: '#A5A58D',
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>

    </Container>
>>>>>>> Stashed changes
    </ThemeProvider>
  );
}