import { Grow } from "@mui/material";
import React,{ useState } from "react";
import { Button, Grid, Typography, Card, CardContent } from "@mui/material";
import DashboardNavbar from "../components/DashboardNavbar";
import AdminDashboardSidebar from '../components/AdminDashboardSidebar'
import ProductTable from "../components/ProductTable";

export default function ProductList() {
    const [isToggle, setIsToggle] = useState(true);
    const Component = React.forwardRef((props, ref) => {
      return (
        <div ref={ref} {...props}>
         < AdminDashboardSidebar />
        </div>
      );
    })
    const handleToggle = (e) => {
      setIsToggle(e);
    };
    return (
        // <>
        //     <Grid container display={'flex'}>
        //         <Grid marginRight={'220px'}>
        //             <AdminDashboardSidebar />
        //         </Grid>

        //         <Grid container display={'flex'} alignItems={'center'}>
        //             <Grid marginLeft={'120px'} paddingTop={'30px'}>
        //                 <Typography variant={'h5'} marginLeft={'200px'}>Product List</Typography>
        //             </Grid>

        //             <Grid ml={'auto'}>
        //                 <DashboardNavbar />
        //             </Grid>
        //         </Grid>
        //     </Grid>
 
        //     <Grid display={'flex'} justifyContent={'center'} marginTop={'50px'} marginLeft={'150px'}>
        //         <Card>
        //             <CardContent>
        //                 <ProductTable />
        //                 <Button  variant="contained" href={"/product/create"}>
        //                     Create Product
        //                 </Button>
        //             </CardContent>
        //         </Card>
        //     </Grid>
        // </>
    <Grid container>
      <Grid item xs={12}>
        <DashboardNavbar toggle={handleToggle} />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{display:isToggle ? "none" : "unset"}}
          >
            <Grow in={!isToggle}>
                <Component />
            </Grow>     
          </Grid>
          <Grid item xs={isToggle ? 12 : 10}>
            <Card sx={{minHeight:"calc(100vh - 64px)"}}>
              <CardContent>
              <ProductTable />
                <Button  variant="contained" href={"/product/create"}>
                    Create Product
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    )
}