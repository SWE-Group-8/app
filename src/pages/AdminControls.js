import AdminCards from '../components/AdminCards.tsx';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import basket from '../images/Basket-PNG-File.png';
import people from '../images/Audience-PNG-HD-Image.png';
import discount from '../images/DiscountTag.png';
import tools from '../images/Tools-Silhouette.png';
import history from '../images/Vector-History-PNG-Image.png';
import add from '../images/Plus-Symbol-Vector-PNG-Images-HD.png';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const adminCards = [
  {
    image: tools,
    button: "Modify Items",
    link: "http://localhost:3000/ModifyItems",
  },
  {
    image: discount,
    button: "Discount Codes",
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
    image: basket,
    button: "Placed Orders",
    link: "http://localhost:3000/PlacedOrders",
  },
  {
    image: history,
    button: "History of Orders",
    link: "http://localhost:3000/HistoryOfOrders",
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box p={20} pl={40} pt={10} pb={10}>
      <Grid container spacing={10}>
        {adminCards.map((adminCard, i) => {
          return( 
            <Grid key ={i} item>
              <AdminCards  {...adminCard} /> 
            </Grid> 
          );
        })}
      </Grid>
      </Box></ThemeProvider>
    
    
  );
}