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
import AngeloPic from '../images/Angelo-M.jpg';
import BondPic from '../images/Bond-Blanton.jpg';
import EricPic from '../images/Eric-P.jpg';
import JavierPic from '../images/Javier-Rosa.jpg';
import ZaqPic from '../images/zaquariah-holland.jpg';
import JJPic from '../images/JJ.jpg';
import { NavLink, NavMenu } from '../components/NavbarElements';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
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


    const mediaCards = [
      {
        image: AngeloPic,
        title: "Angelo Middleton",
        description: `Database Management Lead`,
        linkedinLink: 'https://www.linkedin.com/in/angelo-middleton-9b2486133/'
      },
      {
        image: BondPic,
        title: "Bond Blanton",
        description: `Items & Inventory Manager`,
      },
      {
        image: EricPic,
        title: "Eric Por",
        description: `Lead UI Designer`,
        linkedinLink: 'https://www.linkedin.com/in/eric-por'
      },
      {
        image: JavierPic,
        title: "Javier Delarosa Quiros",
        description: `Accounts & Carts Manager`,
      },
      {
        image: JJPic,
        title: "Jose Torres",
        description: `Lead UX Designer`,
        linkedinLink: 'https://www.linkedin.com/in/jose-torres-954378224/'
      },
      {
        image: ZaqPic,
        title: "Zaquariah Holland",
        description: `Project Manager`,
      },
    ];


export default function AboutTemp() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
          sx={{
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
      <Box sx={{ justify: 'center', transform: 'scale(0.8)'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {mediaCards.map((card, index) => (
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
      
    </ThemeProvider>
  );
}