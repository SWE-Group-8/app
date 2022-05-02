import React, { useState, useEffect } from 'react';
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
import { API, graphqlOperation } from 'aws-amplify';
import { Auth, CognitoAuthSession } from 'aws-amplify';
import {listOrders} from '../graphql/queries';
import { useAuthenticator } from '@aws-amplify/ui-react';

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
  const { user } = useAuthenticator(context => [context.user]);
  console.log(user.attributes)

  const [Inv, setInv] = useState([])
  const { route , signOut } = useAuthenticator((context) => [context.user]);
  const HandleSubmit = async (  ) => {
      try {
      if(route === 'authenticated'){
          const object = await API.graphql({
          query: listOrders,
          variables: { filter: {user: {contains: user.attributes.email}} },
          authMode: 'AMAZON_COGNITO_USER_POOLS'
          })
          setInv(object.data.listOrders.items);
          console.log('Items:', Inv)
      }
      } catch (err) {
          console.log('error getting inventory:', err)
      }
  }
  return (
    
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ width: '100%' }}>
      <Box sx={{borderBottom: 1, borderColor: 'Typographyider' }}>
        <Tabs value={value} centered onChange={handleChange}>
          <Tab label="Personal Information" {...a11yProps(0)} />
          <Tab label="Order History" {...a11yProps(1)} />
          
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
            <Typography>Name: {user.attributes.name}</Typography>
            <Typography>Phone Number: {user.attributes.phone_number}</Typography>
            <Typography>Email: {user.attributes.email}</Typography>
            <Typography>Address: {user.attributes.address}</Typography>
            
          </CardContent>
        </Card>
      </Container>
    </TabPanel>

      {/*Order History Tab Content */}
      <TabPanel value={value} index={1} sx={{
        bgcolor: "#6B705C"
      }}>
        <Container centered>
          <Button onClick={HandleSubmit}>
              PopulateArray
          </Button>
          <Card>
            <CardContent sx={{
              bgcolor: "#A5A58D"
            }}>
              <Typography>Order History</Typography>
            {Inv.map((card) => (
              <Card>
                <CardContent sx={{
              bgcolor: "#B7B7A4"
            }}>
                  <Typography>Order: {card.id}</Typography>
                  <Typography>Price: {card.totalPrice}</Typography>
                </CardContent>
              </Card>
            ))
            }
            
            </CardContent>
          </Card>
        </Container>
      </TabPanel>

      {/*Account management Tab Content */}
      
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>
    </ThemeProvider>
  );
}
    