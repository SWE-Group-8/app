import * as React from 'react';
import './AddItemsTest.css';
// React from 'react';
import {Storage, API, graphqlOperation} from 'aws-amplify';
import {createDansInventory} from '../graphql/mutations';
import awsExports from "../aws-exports";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

/*function createData(ItemName, Description, Price, Amount) {
    return { ItemName, Description, Price, Amount };
}*/

/*const rows = [
    createData('CAP1', 'green special cap', 999.99, 1),
    createData('CAP', 'yellow cap', 17.99, 20),
    createData('CAP', 'red cap', 30.99, 50),
    createData('CAP', 'blue cap', 20.99, 45),
    createData('CAP', 'black cap', 20.99, 78),
];

export default function BasicTable() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Item Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Amount in stock</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.ItemName}</TableCell>
                                <TableCell align="right">{row.Description}</TableCell>
                                <TableCell align="right">{row.Price}</TableCell>
                                <TableCell align="right">{row.Amount}</TableCell>
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
}*/

class AddItemsTest extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            file : null
        }
    }

    addImageToDB = async (image) => {
        console.log('add image to db')
        try{
            await API.graphql(graphqlOperation(createDansInventory, {Input:image}));
        } catch (error) {
            console.log(error)
        }
    }

    onChange(e){
        const file = e.target.files[0];
        console.log(file);

        Storage.put(file.name, file, {
        contentType: 'image/png'
        }).then ((result) => {
            this.setState({file: URL.createObjectURL(file)})
            //console.log(result);
            const image = {
                name: file.name,
                file: {
                    bucket: awsExports.aws_user_files_s3_bucket,
                    region: awsExports.aws_user_files_s3_bucket_region,
                    key: file.name
                }
            }
            //console.log(image);
            this.addImageToDB(image);
            console.log('added completed')
        }).catch(err => console.log(err));
    }

    render() {
        return(
            <div className="AddItemsTest">
                <div>
                    <p>Please select an image to upload</p>
                    <input type="file" onChange={(evt) => this.onChange(evt)}/>
                </div>
                <div>
                    <img src={this.state.file}/>
                </div>
            </div>
        )
    }
}

export default AddItemsTest;