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
import { daDK } from '@mui/material/locale';
import { updateDansInventory } from '../graphql/mutations';

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
      field: 'attributes.name',
      headerName: 'NAME',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'attributes.phone_number',
      headerName: 'PHONE NUMBER',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'attributes.email',
      headerName: 'EMAIL',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'attributes.address',
      headerName: 'ADDRESS',
      type: 'string',
      width: 200,
      editable: true,
    },
  ];
  const [users, setUsers] = useState([])
  const { route , signOut } = useAuthenticator((context) => [context.user]);
  useEffect(() => {
    const fetchUsers = async () =>{
        let apiName = 'adminQueries';
        let path = '/listUsers';
        let nextToken = ""
        let myInit = {
          queryStringParameters: {
            "token": nextToken
          },
          headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
          }
        }
        const { NextToken, ...rest } = await API.get(apiName, path, myInit);
        nextToken = NextToken;
        return rest
    }
    const users = fetchUsers();
    console.log(users)
    //setUsers(users)
    console.log("no")
    //.catch(console.error)
}, [])
      const [inputText, setInputText] = useState("");
      let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
    
    const [dansDetails, setDansDetails] = useState({ name: "", color: "", price: "", fabric: "", type: "", image: "", quantity: "", id: "" });
    const handleSubmit = async (e) => {
        var inputInv = {}
        inputInv.id = dansDetails.id
        if(dansDetails.name !== ""){
          inputInv.name = dansDetails.name
        }
        if(dansDetails.color !== ""){
          inputInv.color = dansDetails.color
        }
        if(dansDetails.price !== ""){
          inputInv.price = dansDetails.price
        }
        if(dansDetails.fabric !== ""){
          inputInv.fabric = dansDetails.fabric
        }
        if(dansDetails.type !== ""){
          inputInv.type = dansDetails.type
        }
        if(dansDetails.image !== ""){
          inputInv.image = dansDetails.image
        }
        if(dansDetails.quantity !== ""){
          inputInv.quantity = dansDetails.quantity
        }

        e.preventDefault();
        try {
            if(inputInv.id === "")return
            await API.graphql(graphqlOperation(updateDansInventory, { input: inputInv}))
            setDansDetails({ name: "", color: "", price: "", fabric: "", type: "", image: "", quantity: "", id: "" })
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }
    
    
    

  return (
    <ThemeProvider theme={theme} >
    <div  style={{ height: 400, width: '100%' }}>
      <CssBaseline />
      {/* <Button onClick={HandleSubmit}>
        PopulateArray
      </Button> */}
      <ThemeProvider theme={innertheme}>
      
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        editRowsModel={true}
      />
      
      </ThemeProvider>
      <ThemeProvider theme={innertheme}>
        {/* <Search onchange={inputHandler}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search> */}
        <Box>
          <StyledInputBase 
            placeholder="id..."
            inputProps={{ 'aria-label': 'id' }}
            onChange={(e) => setDansDetails({ ...dansDetails, id: e.target.value })}
            required
            fullWidth={true}
          />
          <StyledInputBase 
            placeholder="name..."
            inputProps={{ 'aria-label': 'name' }}
            onChange={(e) => setDansDetails({ ...dansDetails, name: e.target.value })}
          />
          <StyledInputBase 
            placeholder="color..."
            inputProps={{ 'aria-label': 'color' }}
            onChange={(e) => setDansDetails({ ...dansDetails, color: e.target.value })}
          />
          <StyledInputBase 
            placeholder="price..."
            inputProps={{ 'aria-label': 'price' }}
            onChange={(e) => setDansDetails({ ...dansDetails, price: e.target.value })}
          />
          <StyledInputBase 
            placeholder="fabric..."
            inputProps={{ 'aria-label': 'fabric' }}
            onChange={(e) => setDansDetails({ ...dansDetails, fabric: e.target.value })}
          />
          <StyledInputBase 
            placeholder="type..."
            inputProps={{ 'aria-label': 'type' }}
            onChange={(e) => setDansDetails({ ...dansDetails, type: e.target.value })}
          />
          <StyledInputBase 
            placeholder="name..."
            inputProps={{ 'aria-label': 'name' }}
            onChange={(e) => setDansDetails({ ...dansDetails, image: e.target.value })}
          />
          <StyledInputBase 
            placeholder="quantity..."
            inputProps={{ 'aria-label': 'quantity' }}
            onChange={(e) => setDansDetails({ ...dansDetails, quantity: e.target.value })}
          />

          <Button variant="contained" onClick={handleSubmit}>
            Submit Edit
          </Button>
        </Box>
      </ThemeProvider>
    </div>
    </ ThemeProvider>
  );
}