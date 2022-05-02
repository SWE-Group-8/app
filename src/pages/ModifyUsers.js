import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API, graphqlOperation } from 'aws-amplify';
import { Auth, CognitoAuthSession } from 'aws-amplify';
import {listDansInventories} from '../graphql/queries';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Search } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function ToolbarGrid() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#ffe8d6"
      }
    }
  });
  const innertheme = createTheme({
    palette: {
      background: {
        default: "#6B705C"
      }
    }
  });
  const columns = [
    { 
      field: 'Email', 
      type: 'string',
      headerName: 'EMAIL', 
      width: 90 },
    {
      field: 'name',
      headerName: 'NAME',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'Phone Number',
      headerName: 'PHONE NUMBER',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'address',
      headerName: 'ADDRESS',
      type: 'number',
      width: 200,
      editable: true,
    },
    
  ];
  const [orders, setOrders] = useState([])
  const { route , signOut } = useAuthenticator((context) => [context.user]);
  const HandleSubmit = async (  ) => {
        try {
          if(route === 'authenticated'){
            const object = API.graphql({
              query: listDansInventories,
              authMode: 'AMAZON_COGNITO_USER_POOLS'
            })
            setOrders(object.data.listDansInventories.items);
            console.log('Items:', orders)
          }
        } catch (err) {
            console.log('error getting inventory:', err)
        }
      }

      const [inputText, setInputText] = useState("");
      let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
  return (
    <ThemeProvider theme={theme} >
    <div  style={{ height: 400, width: '100%' }}>
      <CssBaseline />
      <Button onClick={HandleSubmit}>
        PopulateArray
      </Button>
      <ThemeProvider theme={innertheme}>
      
      <DataGrid
        rows={orders}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      
      </ThemeProvider>
      <ThemeProvider theme={innertheme}>
        <Search onchange={inputHandler}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box>
          <StyledInputBase 
            placeholder="name..."
            inputProps={{ 'aria-label': 'name' }}
          />
          <StyledInputBase 
            placeholder="name..."
            inputProps={{ 'aria-label': 'name' }}
          />
          <StyledInputBase 
            placeholder="name..."
            inputProps={{ 'aria-label': 'name' }}
          />
          <StyledInputBase 
            placeholder="name..."
            inputProps={{ 'aria-label': 'name' }}
          />
          
          <Button variant="contained">
            Submit Edit
          </Button>
        </Box>
      </ThemeProvider>
    </div>
    </ ThemeProvider>
  );
}