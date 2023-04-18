import {Box} from "@mui/material"
import Header from "../../../components/Header";

const Dashboard = () => {
    return <div>
        <Box display="flex" justifyContent="space-between" alignItems="center" margin={5}>
        <Header title="DASHBOARD" subtitle="Welcome to GitWell!" />
        </Box>
    </div>
}

export default Dashboard;