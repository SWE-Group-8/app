import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API, graphqlOperation } from 'aws-amplify';
import { Auth, CognitoAuthSession } from 'aws-amplify';
import {listDansOrders} from '../graphql/queries';
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
    { field: 'id', headerName: 'ID', width: 90 },
    
    {
      field: 'order_id',
      headerName: 'ORDER_ID',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'dans_id',
      headerName: 'DANS_ID',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'CREATEAT',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'updateAt',
      headerName: 'UPDATEDAT',
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
              query: listDansOrders,
              authMode: 'AMAZON_COGNITO_USER_POOLS'
            })
            setOrders(object.data.listDansOrders.items);
            console.log('Items:', orders)
          }
        } catch (err) {
            console.log('error getting inventory:', err)
        }
      }

      

  return (
    <ThemeProvider theme={theme} >
    <div onload={HandleSubmit()} style={{ height: 400, width: '100%' }}>
      <CssBaseline />
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
    </div>
    </ ThemeProvider>
  );
}