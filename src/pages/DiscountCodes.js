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
        <h1>Add New Discount Code</h1>
      </div>
      <div>
        <TextField
        required
        error
        id="outlined-required"
        label="Description"
        defaultValue="Description"
        helperText="No Entry"
        />
        
      </div>
      <div>
        <TextField
        required
        id="outlined-required"
        label="Code"
        defaultValue="Code"
        
        />
      </div>
      <div>
        <TextField
        required
        id="outlined-required"
        label="Discount Decimal"
        defaultValue="Discount Decimal"
        
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