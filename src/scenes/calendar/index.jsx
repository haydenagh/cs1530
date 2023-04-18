import {Box} from "@mui/material"
import Header from "../../components/Header";

const Calendar = () => {
    return <div>
        <Box display="flex" justifyContent="space-between" alignItems="center" margin={5}>
        <Header title="Calendar" subtitle="See your progress!" />
        </Box>
    </div>
}

export default Calendar;