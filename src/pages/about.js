import MediaCard from '../components/MediaCard.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import AngeloPic from '../images/Angelo-M.jpg';
import BondPic from '../images/Bond-Blanton.jpg';
import EricPic from '../images/Eric-P.jpg';
import JavierPic from '../images/Javier-Rosa.jpg';
import ZaqPic from '../images/zaquariah-holland.jpg';
import JJPic from '../images/JJ.jpg';


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

const theme = createTheme({
  palette: {
    background: {
      default: "#ffe8d6"
    }
  }
});
export default function About() {
  
  return (
    <>

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
    <Box p={20} pl={55}>
    <Grid container spacing={10}>
      {mediaCards.map((mediaCard, i) => {
        return( 
          <Grid key ={i} item>
            <MediaCard  {...mediaCard} /> 
          </Grid> 
        );
      })}
    </Grid>
    </Box>
    </ThemeProvider>
    </>
  );
}