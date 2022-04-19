import React, {useState} from 'react'
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

    return(
        <Grid sx={{height: 400, width: 875}}>
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