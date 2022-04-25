import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import hat from '../images/chickenDance.gif';
import ZaqPic from '../images/zaquariah-holland.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid'
import { API, graphqlOperation } from 'aws-amplify'
import {listDansInventories} from '../graphql/queries'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const mediaCards = [
  {
    image: hat,
    title: "Angelo Middleton",
    description: `Database Management Lead`,
    
  },
  {
    image: hat,
    title: "Bond Blanton",
    description: `Items & Inventory Manager`,
  },
  {
    image: hat,
    title: "Eric Por",
    description: `Lead UI Designer`,
    
  },
  {
    image: hat,
    title: "Javier Delarosa Quiros",
    description: `Accounts & Carts Manager`,
  },
  {
    image: hat,
    title: "Jose Torres",
    description: `Lead UX Designer`,
    
  },
  {
    image: hat,
    title: "Zaquariah Holland",
    description: `Project Manager`,
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
  const maxSteps = mediaCards.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  const [Inv, setInv] = useState([])
  const HandleSubmit = async () => {
        
        try {
          const object = await API.graphql({
            query: listDansInventories,
            variables: { filter: {name: {contains: ""}} },
            authMode: 'AWS_IAM'
          })
          setInv(object.data.listDansInventories.items);
          console.log('Items:', Inv)
        } catch (err) {
            console.log('error getting inventory:', err)
        }
      }
    
  return [

    
    
    <ThemeProvider theme={theme}>
    <Container pl="20%">
      <CssBaseline />
    {/* <Box  sx={{ maxWidth: 1500, flexGrow: 1, alignItems: "center"}}>
      
      
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{
          border: '.5px solid'
        }}
        
      >
        {mediaCards.map((step, index) => (
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
                src={ZaqPic}
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
      ></MobileStepper>
    </Box> */}
    <Button onClick={HandleSubmit}>
      populateArray
    </Button>
    <Box sx={{ justify: 'center', transform: 'scale(0.8)'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Inv.map((card, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card variant="outlined" style={{ margin: 10 }} >
                <CardMedia
                style={{height: 640, width: "100%", alignContent: 'center', objectFit: 'cover'}}
                
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
                        Add To Cart
                      </td>
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

    
    </Container>
    </ThemeProvider>
  ];
}

export default SwipeableTextMobileStepper;