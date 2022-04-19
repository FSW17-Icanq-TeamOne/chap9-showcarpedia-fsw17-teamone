import { GridList, GridListTile } from '@material-ui/core';
import { Typography, Grid } from '@mui/material';
import { Container } from 'react-bootstrap';

const BrandList = () => {
  return (
    <div style={{marginTop: 100}}>
      <Grid>
        <Typography>Our Brand</Typography>

        <Grid container display={'flex'} gap={'5%'} justifyContent={'center'} marginTop={'60px'}>
            <GridList sx={{ width: 400, height: 400 }} cols={7} rowHeight={164}>
            {itemData.map((item) => (
                <GridListTile key={item.img}>
                <img
                    src={`${item.img}`} />
                </GridListTile>
            ))},
            </GridList>
        </Grid>
      </Grid>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    cols: 3,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    cols: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    cols: 5,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    cols: 6,
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    cols: 7,
  }
];

export default BrandList;