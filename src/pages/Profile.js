import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, Container } from '@mui/material';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AdminControls from '../pages/AdminControls';


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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const theme = createTheme({
  palette: {
    background: {
      default: "#ffe8d6"
    }
  }
});


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ width: '100%' }}>
      <Box sx={{borderBottom: 1, borderColor: 'Typographyider' }}>
        <Tabs value={value} centered onChange={handleChange}>
          <Tab label="Personal Information" {...a11yProps(0)} />
          <Tab label="Order History" {...a11yProps(1)} />
          <Tab label="Account Management" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/*Personal Info Tab Content */}
      <TabPanel value={value} index={0} sx={{
        bgcolor: "#6B705C"
      }}>
      <Container centered >
        <Card  sx={{
            bgcolor: "#A5A58D"
          }}>
          <CardContent>
          <Typography>Name:</Typography>
          <Typography>Phone Number:</Typography>
          <Typography>Email:</Typography>
          <Typography>Address:</Typography>
          <Typography>Address2:</Typography>
          <Typography>City:</Typography>
          <Typography>State:</Typography>
          <Typography>Zip:</Typography>
          </CardContent>
          <Button style={{color: '#000000', marginRight:30, marginBottom: 30, float: 'right'}}>Edit</Button>
          </Card>
        </Container>
      </TabPanel>

      {/*Order History Tab Content */}
      <TabPanel value={value} index={1} sx={{
        bgcolor: "#6B705C"
      }}>
        <Container centered>
          <Card>
            <CardContent sx={{
            bgcolor: "#A5A58D"
          }}>
            <Typography>Order History Cards Here</Typography>
            </CardContent>
          </Card>
        </Container>
      </TabPanel>

      {/*Account management Tab Content */}
      <TabPanel value={value} index={2} sx={{
        bgcolor: "#6B705C"
      }}>
        <Container centered>
          <Card sx={{
            bgcolor: "#A5A58D"
          }}>
            <CardContent>
            <Typography>Account Information:</Typography>
            <Button 
            onClick ={() => alert("from Account Information")/*insert page link */} 
            style={{color: '#000000', marginRight:30, marginBottom: 30, float: 'right'}}
            > Edit</Button>
            </CardContent>
            <CardActions>
           
            </CardActions>
          </Card>
          <Card sx={{
            bgcolor: "#A5A58D"
          }}>
            <CardContent>
            <Typography>Payment Management:</Typography>
            <Button 
            onClick ={() => alert("from Payment Management")/*insert page link */} 
            style={{color: '#000000', marginRight:30, marginBottom: 30, float: 'right'}}
            > Edit</Button>
            </CardContent>
            <CardActions>
           
            </CardActions>
          </Card>
          <Card sx={{
            bgcolor: "#A5A58D"
          }}>
            <CardContent>
            <Typography>Security:</Typography>
            <Button  
            onClick ={() => alert("from Security Info")/*insert page link */} 
            style={{color: '#000000', marginRight:30, marginBottom: 30, float: 'right'}}
            >Edit</Button>
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
        </Container>
      </TabPanel>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>
    </ThemeProvider>
  );
}
    