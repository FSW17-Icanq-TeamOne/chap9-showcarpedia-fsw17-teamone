import { GridList, GridListTile } from '@material-ui/core';
import { Typography, Grid } from '@mui/material';
import { Container } from 'react-bootstrap';

const BrandList = () => {
  return (
    <div mt="5">
      <Grid>
        <Typography textAlign='center' variant={'h4'}>OUR BRAND</Typography>

        <Grid container display={'flex'} marginTop={'60px'} marginRight={'50px'} marginLeft={'auto'} paddingRight={'100px'} paddingLeft={'100px'}>
            <GridList cols={5} display={'flex'} paddingRight={'100px'} paddingLeft={'100px'} >
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
    img: 'audi.jpg',
    cols: 1,
  },
  {
    img: 'toyota.jpg',
    cols: 2,
  },
  {
    img: 'nissan.jpg',
    cols: 3,
  },
  {
    img: 'volkswagen.jpg',
    cols: 4,
  },
  {
    img: 'mini.jpg',
    cols: 5,
  },
];

export default BrandList;