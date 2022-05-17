import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';

const columns = [
    {field: 'id', headerName: 'ID', width: 50},
    {field: 'username', headerName: 'Username', width: 150},
    {field: 'email', headerName: 'Email', width: 200},
    {
        field: '#edit', 
        headerName: '',
        renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="primary"
                href={`/admin/edit/account/${cellValues.getValue(cellValues.id, 'id')}`}
              >
                Edit
              </Button>
            );
        },
        width: 75
    },
    {
        field: '#delete', 
        headerName: '',
        renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="error"
                onClick={function(){
                  fetch(`http://localhost:4000/v1/admin/delete/${cellValues.getValue(cellValues.id, 'id')}`, {
                    method: 'DELETE',
                    credentials: "include",
                    })
                    .then((response) => {
                    return response.json();
                    })
                    .then((data) => {
                    console.log(data, 'This is the Data')
                    if (data.message === "Success"){
                        window.location.reload();
                    }
                    })
                    .catch((err) => {
                    console.log(err);
                    });
                  }}
              >
                Delete
              </Button>
            );
        },
        width: 75
    } 
]

// const rows = [
//     { id: 1, username: 'alexgodjirah', email: 'gojirah@mail.com'},
//     { id: 2, username: 'igortheMyth', email: 'igorMyth@mail.com'},
//     { id: 3, username: 'Red_Sun', email: 'blujack@mail.com'},
//     { id: 4, username: 'jackAnder', email: 'jack_ander@mail.com'},
//     { id: 5, username: 'whiteBlood', email: 'brown_paper@mail.com'},
// ]

const ProductTable2 = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/v1/admin', {
            
            credentials: "include",
            
        })
      .then((data) => data.json())
      .then((data) => setTableData(data))
      .catch((err) => console.log(err));
    }, [])
    
    return(
      <Grid container  spacing={2}>
        <Grid item xs={12} sm={5} lg={4}>
          <Grid sx={{height: 400, width: 605}}>
              <DataGrid 
                  rows={tableData}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  //checkboxSelection
              />
          </Grid>
        </Grid>
      </Grid>
    )
}

export default ProductTable2