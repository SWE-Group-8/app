import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  return (
    <ThemeProvider theme={theme}>
    <div style={{ height: 400, width: '100%' }}>
      <CssBaseline />
      <ThemeProvider theme={innertheme}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
      </ThemeProvider>
    </div>
    </ ThemeProvider>
  );
}