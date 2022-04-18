import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
    {field: 'id', headerName: 'ID', width: 50},
    {field: 'title', headerName: 'Title', width: 150},
    {field: 'year', headerName: 'Year'},
    {field: 'grade', headerName: 'Grade'},
    {field: 'kiloMeter', headerName: 'Kilometer'},
    {field: 'category', headerName: 'Category'},
    {
        field: '', 
        headerName: '',
        renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="primary"
                href={`/product/edit/${cellValues.getValue(cellValues.id, 'id')}`}
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
                href={`/product/delete/${cellValues.getValue(cellValues.id, 'id')}`}
              >
                Delete
              </Button>
            );
        },
        width: 75
    } 
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
        <div style={{height: 500, width: '90%'}}>
            <DataGrid 
                rows={tableData}
                columns={columns}
                pageSize={10}
            />
        </div>
    )
}

export default ProductTable2