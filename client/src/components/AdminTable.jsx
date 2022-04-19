import React, {useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';

const columns = [
    {field: 'id', headerName: 'ID', width: 50},
    {field: 'username', headerName: 'Username', width: 150},
    {field: 'email', headerName: 'Email', width: 200},
    {
        field: '', 
        headerName: '',
        renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="primary"
                // href={`/product/edit/${cellValues.getValue(cellValues.id, 'id')}`}
              >
                Edit
              </Button>
            );
        },
        width: 75
    },
    {
        renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="error"
                // href={`/product/delete/${cellValues.getValue(cellValues.id, 'id')}`}
              >
                Delete
              </Button>
            );
        },
        width: 75
    } 
]

const rows = [
    { id: 1, username: 'alexgodjirah', email: 'gojirah@mail.com'},
    { id: 2, username: 'igortheMyth', email: 'igorMyth@mail.com'},
    { id: 3, username: 'Red_Sun', email: 'blujack@mail.com'},
    { id: 4, username: 'jackAnder', email: 'jack_ander@mail.com'},
    { id: 5, username: 'whiteBlood', email: 'brown_paper@mail.com'},
]

const ProductTable2 = () => {

    const [tableData, setTableData] = useState([])

    return(
        <Grid sx={{height: 400, width: 605}}>
            <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Grid>
    )
}

export default ProductTable2