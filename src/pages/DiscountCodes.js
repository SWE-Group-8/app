import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
function createData(CodeName, Percent) {
  return { CodeName, Percent};
}

const rows = [
  createData('CODE1', 10),
  createData('CODE2', 15),
  createData('CODE3', 50),
  createData('CODE4', 10),
  createData('CODE5', 20),
];

export default function BasicTable() {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Code Name</TableCell>
            <TableCell align="right">Percent%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.CodeName}
              </TableCell>
              
              <TableCell align="right">{row.Percent}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button>
        Edit
    </Button>
    </>
  );
}