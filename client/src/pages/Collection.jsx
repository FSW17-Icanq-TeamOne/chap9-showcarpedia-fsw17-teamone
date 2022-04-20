import {
  Container,
  Grid,
  Divider
} from "@mui/material";
import Show from "../components/card";
import Filter from "../components/Filter";
import MainNavbar from "../components/MainNavbar";

export default function Collection() {
 

  return (
    <>
      <MainNavbar />

      {/* Filter */}
      <Filter />

     {/* divider  */}

     <Divider variant="middle"/>

      {/* Collection List */}
      <Container>
      <Grid
      paddingTop={5}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Show />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Show />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Show />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Show />
        </Grid>
        

        
        
      </Grid>
      </Container>
      
    </>
  );
}
