import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API, graphqlOperation } from 'aws-amplify';
import { Auth, CognitoAuthSession } from 'aws-amplify';
import {listInventoryOrders} from '../graphql/queries';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@mui/material';

export default function ToolbarGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });
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
      field: 'id', 
      headerName: 'ID', 
      width: 90 },
    {
      field: 'name',
      headerName: 'NAME',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'color',
      headerName: 'COLOR',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'PRICE',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'fabric',
      headerName: 'FABRIC',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'type',
      headerName: 'TYPE',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'image',
      headerName: 'IMAGE',
      type: 'string',
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
              query: listInventoryOrders,
              authMode: 'AMAZON_COGNITO_USER_POOLS'
            })
            setOrders(object.data.listInventoryOrders.items);
            console.log('Items:', orders)
          }
        } catch (err) {
            console.log('error getting inventory:', err)
        }
      }


  return (
    <ThemeProvider theme={theme} >
    <div  style={{ height: 400, width: '100%' }}>
      <CssBaseline />
      <Button onClick={HandleSubmit}>
        PopulateArray
      </Button>
      <ThemeProvider theme={innertheme}>
      </ThemeProvider>
    </div>
    </ ThemeProvider>
  );
}