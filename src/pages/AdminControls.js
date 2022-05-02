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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import basket from '../images/Basket-PNG-File.png'; 
import people from '../images/Audience-PNG-HD-Image.png'; 
import discount from '../images/DiscountTag.png'; 
import tools from '../images/Tools-Silhouette.png'; 
import history from '../images/Vector-History-PNG-Image.png'; 
import add from '../images/Plus-Symbol-Vector-PNG-Images-HD.png';


function Copyright(props) {
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright Â© '}
          <Link color="inherit" href="https://github.com/SWE-Group-8">
              Group 8 Repo
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
  );
}

const theme = createTheme({
  palette: {
    background: {
      default: "#ffe8d6"
    }
  }
});


const adminCards = [
  { 
    image: tools, button: "Modify Items", 
    link: "http://localhost:3000/ModifyItems",},   
  {
    image: discount, button: "Discount Codes",     
    link: "http://localhost:3000/AddDiscountCodes",   
  },//replaced DiscountCodes with AddDiscountCodes   
  {     
    image: add,     
    button: "Add Items",     
    link: "http://localhost:3000/AddItemsTests",   
  },//replaced AddItems with AddItemsTest page   
  {     
    image: people,     
    button: "Modify Users",     
    link: "http://localhost:3000/ModifyUsers",   
  },      
  {     
    image: history,     
    button: "History of Orders",     
    link: "http://localhost:3000/HistoryOfOrders",   
  }, 
];


export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
              Admin Panel
            </Typography>

            
          </Container>
        </Box>
      <Box sx={{ justify: 'center', transform: 'scale(0.8)' }}>
        <Grid container spacing={5} pl={5} column={{ xs: 4, sm: 8, md: 12}}>
          {adminCards.map((card, index) => (
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
                <Button href={card.link} variant="outlined" size="large" color="inherit">
                {card.button}
                </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            ))}
        </Grid>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }}/>
    </ThemeProvider>
  );
}