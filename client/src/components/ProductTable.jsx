import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';

const columns = [
    {field: 'id', headerName: 'ID', width: 50},
    {field: 'title', headerName: 'Title', width: 150},
    {field: 'brand', headerName: 'Brand', width: 120},
    {field: 'year', headerName: 'Year', width: 75},
    {field: 'grade', headerName: 'Grade', width: 75},
    {field: 'kiloMeter', headerName: 'Kilometer', width: 100},
    {field: 'category', headerName: 'Category', width: 100},
    {
        field: '#edit', 
        headerName: '',
        renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="primary"
                href={`/productUpdate/${cellValues.getValue(cellValues.id, 'id')}`}
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
                  fetch(`http://localhost:4000/v1/cars/delete/${cellValues.getValue(cellValues.id, 'id')}`, {
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

const rows = [
    { id: 1, title:'718 Cayman GT4', brand: 'Porsche', year: 2022, grade: 1, kiloMeter: 100, category: 'Sport'},
    { id: 2, title:'Carrera 911', brand: 'Porsche', year: 2019, grade: 2, kiloMeter: 200, category: 'Sport'},
    { id: 3, title:'Ranger', brand: 'Ford', year: 2018, grade: 3, kiloMeter: 1000, category: 'Pickup'},
    { id: 4, title:'Explorer', brand: 'Ford', year: 2019, grade: 3, kiloMeter: 500, category: 'SUV'},
    { id: 5, title:'Tahoe', brand: 'Chevrolet', year: 2020, grade: 2, kiloMeter: 400, category: 'SUV'},
    { id: 6, title:'X5', brand: 'BMW', year: 2020, grade: 1, kiloMeter: 400, category: 'SUV'},
    { id: 7, title:'M8', brand: 'BMW', year: 2021, grade: 1, kiloMeter: 1200, category: 'Coupe'},
]

const ProductTable2 = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
          fetch('http://localhost:4000/v1/cars', {
              
              credentials: "include",
              
          })
        .then((data) => data.json())
        .then((data) => setTableData(data))
        .catch((err) => console.log(err));
      }, [])
    return(
        <Grid sx={{height: 400, width: 875}}>
            <DataGrid 
              rows={tableData}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              //checkboxSelection
            />
        </Grid>
    )
}

export default ProductTable2