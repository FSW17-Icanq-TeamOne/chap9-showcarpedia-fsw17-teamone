import { alpha, Box, Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, Tooltip, Grid } from '@mui/material'
import { useState } from 'react'
import { visuallyHidden } from '@mui/utils'
import PropTypes from 'prop-types'


const createData = (username, email, fullName) => {
    return{
        username,
        email,
        fullName
    }
}

const rows = [
    createData('alexgodjirah', 'alex.c.gozali@gmail.com', 'Alex'),
    createData('igorthemyth', 'igor.myth@mail.com', 'Igor'),
    createData('red_sun', 'blackDwarf@mail.com', 'Clark'),
    createData('saturnia', 'bluesh@mail.com', 'Diana'),
]

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }

    return 0
}

const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, idx) => [el, idx]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);

        if (order !== 0) {
            return order;
        }

        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

const headCells = [
    {
        id: 'username',
        numeric: false,
        disablePadding: true,
        label: 'Username',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: true,
        label: 'Email',
    },
    {
        id: 'fullName',
        numeric: false,
        disablePadding: true,
        label: 'Full Name',
    }
]

const EnhancedTableHead = (props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property)
    };

    return(
        <>
        <TableHead>
            <TableRow>
                <TableCell padding={'checkbox'}>
                    <Checkbox 
                        color='primary'
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'Select All Product',
                        }}
                    />
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        algin={headCell.numeric ? `right`: `left`}
                        padding={headCell.disablePadding ? 'none': 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order: 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component='span' sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
        </>
    )
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
}

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar 
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: `1 1 100%`}}
                    color='inherit'
                    variant='subtitle1'
                    component='div'
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx ={{ flex: '1 1 100%' }}
                    variant='h6'
                    id='tableTitle'
                    component='div'
                >
                    Product List
                </Typography>
            )}

            {numSelected > 0 && (
                <Grid display='flex' gap='10px'>
                <Tooltip title='Delete'>
                    {/* This Should Be Link to Delete API */}
                    <Button>Delete</Button>
                </Tooltip>

                <Tooltip title='Edit'>
                    {/* This Should Be Link To Edit API */}
                    <Button>Edit Profile</Button>
                </Tooltip>

                <Tooltip title='Edit'>
                    {/* This Should Be Link To Edit API */}
                    <Button>Edit Account</Button>
                </Tooltip>
                </Grid>
            )}
        </Toolbar>
    )
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
}


export default function AdminTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('brand');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property)
    }

    const handleSelectionAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.title);
            setSelected(newSelecteds);
            return;
        }
        setSelected([])
    }

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat (selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            )
        }

        setSelected(newSelected)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = 
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: 700}}>
            <Paper sx={{ width: `100%`, mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ maxWidth: 700 }}
                        aria-labelledby='tableTitle'
                        size='medium'
                    >
                        <EnhancedTableHead 
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectionAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.username)
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => handleClick(event, row.username)}
                                            role='checkbox'
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.username}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding='checkbox'>
                                                <Checkbox
                                                    color='primary'
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component='th'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row.username}
                                            </TableCell>
                                            <TableCell align=''>{row.email}</TableCell>
                                            <TableCell align=''>{row.fullName}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 54 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination 
                    rowsPerPageOptions={[5,10,25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    )
}