import { Grid, Box} from "@mui/material";
import AdminManagerTable from "../../components/AdminManager/AdminManagerTable";
import DashboardAdmin from "../../components/Dashboard/DashboardAdmin";

export default function AdminList() {
  return (
    <Grid container>
        <DashboardAdmin />
        <Grid item xs>
        <Box sx={{ minHeight: "calc(100vh - 64px)", m: 2 }}>
          <Grid container display={'flex'} justifyContent={'center'} marginTop={'40px'}>
            <AdminManagerTable />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
