import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react'

const columns = [
    {field: 'id', headerName: 'ID', flex: 1},
    {field: 'username', headerName: 'Username', flex: 1},
    {field: 'email', headerName: 'Email', flex: 1},
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
        flex: 1
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
        flex: 1
    } 
]

// const rows = [
//     { id: 1, username: 'alexgodjirah', email: 'gojirah@mail.com'},
//     { id: 2, username: 'igortheMyth', email: 'igorMyth@mail.com'},
//     { id: 3, username: 'Red_Sun', email: 'blujack@mail.com'},
//     { id: 4, username: 'jackAnder', email: 'jack_ander@mail.com'},
//     { id: 5, username: 'whiteBlood', email: 'brown_paper@mail.com'},
// ]

const AdminManagerTable = () => {

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
        <Grid container >
           <Grid item sm={1} lg={2}>
        </Grid>
      <Grid item xs={12} lg={8}>
        <Grid container spacing={2}>
          <Grid item xs>
        <Typography variant={"h4"} textAlign="center">Admin List</Typography>
          </Grid>
        <Grid item xs={12}>
        <DataGrid
                autoHeight
                rows={tableData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                //checkboxSelection
            />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" href={"/admin/create/account"}>
              Create Admin
            </Button>
        </Grid>
        </Grid>
      
           
      </Grid>
            
             <Grid item sm={1} lg={2}>
        </Grid>
        </Grid>
    )
}

export default AdminManagerTable