import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API, graphqlOperation } from 'aws-amplify';
import { Auth, CognitoAuthSession } from 'aws-amplify';
import {listInventoryOrders} from '../graphql/queries';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@mui/material';

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
    { field: 'id', headerName: 'ID', width: 90 },
    
    {
      field: 'dansInventoryID',
      headerName: 'dansInventoryID',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'orderID',
      headerName: 'orderID',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'createdAt',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'updatedAt',
      headerName: 'updatedAt',
      type: 'number',
      width: 200,
      editable: true,
    },
  ];
  const [orders, setOrders] = useState()
  const { route , signOut } = useAuthenticator((context) => [context.user]);
  // const HandleSubmit = async (  ) => {
  //       try {
  //         if(route === 'authenticated'){
  //           const object = API.graphql({
  //             query: listInventoryOrders,
  //             authMode: 'AMAZON_COGNITO_USER_POOLS'
  //           })
  //           setOrders(object.data.listInventoryOrders.items);
  //           console.log('Items:', orders)
  //         }
  //       } catch (err) {
  //           console.log('error getting inventory:', err)
  //       }
  //     }

      useEffect(() => {
        const fetchData = async () =>{
            try {

              const object = await API.graphql({
              query: listInventoryOrders,
              authMode: 'AMAZON_COGNITO_USER_POOLS'
              })
              setOrders(object.data.listInventoryOrders.items);
              console.log('Testing Items:', orders)
            }catch (err) {
                    console.log('error getting inventory:', err)
                }
        }
        fetchData();
        console.log("yes")

    }, [])

  return (
    <ThemeProvider theme={theme} >
    <div  style={{ height: 430, width: '100%' }}>
      <CssBaseline />
      {/* <Button onClick={HandleSubmit}>
        PopulateArray
      </Button> */}
      <ThemeProvider theme={innertheme}>
      
      <DataGrid
        rows={orders}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
        disableSelectionOnClick
      />
      </ThemeProvider>
    </div>
    </ ThemeProvider>
  );
}