import {Box} from "@mui/material"
import Header from "../../components/Header";

const Weight = () => {
    return <div>
        <Box display="flex" justifyContent="space-between" alignItems="center" margin={5}>
        <Header title="WEIGHT GOALS" subtitle="Log your weight! Does it match your goal?" />
        </Box>
    </div>
}

export default Weight;