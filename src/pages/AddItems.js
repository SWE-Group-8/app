import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
const theme = createTheme({
  palette: {
    background: {
      default: "#ffe8d6"
    }
  }
});

export default function AddItems(){
  return(
  <ThemeProvider theme={theme}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete='off'
    >
      
      <CssBaseline />
      <div>
        <h1>Fill in all sections to add new item to database</h1>
      </div>
      <div>
        <TextField
        required
        error
        id="outlined-required"
        label="Name"
        defaultValue="Name"
        helperText="No Entry"
        />
        
      </div>
      <div>
        <TextField
        required
        id="outlined-required"
        label="Color"
        defaultValue="Name"
        
        />
      </div>
      <div>
        <TextField
        required
        id="outlined-required"
        label="Fabric"
        defaultValue="Name"
        
        />
      </div>
      <div>
        <TextField
        required
        id="outlined-required"
        label="Type"
        defaultValue="Name"
        
        />
      </div>
      <div>
        <TextField
        required
        id="outlined-required"
        label="Price"
        defaultValue="Name"
        
        />
      </div>
      <div>
        <Button variant='outlined'>
          Submit
        </Button>
      </div>
    </Box>
  </ThemeProvider>
  );
}