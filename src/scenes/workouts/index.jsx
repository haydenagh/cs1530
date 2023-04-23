import { useState } from "react";
import { Box, Typography,useTheme,Select,MenuItem} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { workoutPlans } from "../../data/mockData"
import Header from "../../components/Header";

const Workout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // Creates Table
    {
      field: "name",
      headerName: "Exercise",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "sets",
      headerName: "Sets",
      flex: 1,
    },
    {
      field: "reps",
      headerName: "Reps",
      flex: 1,
    },
    {
      field: "weight",
      headerName: "Weight (lbs)",
      flex: 1,
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(workoutPlans[0]);

  const handlePlanChange = (event) => { // Change this to DB data
    setSelectedPlan(
      workoutPlans.find((plan) => plan.name === event.target.value)
    );
  };

  return (
    <Box m="20px">
      <Header title="WORKOUT PLANS" subtitle="Check out your plans!!" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      > {/* Select which workout plan you want */}
        <Box display="flex" justifyContent="space-between" mb="20px">
          <Typography variant="h6" color="textPrimary">
            Select a Workout Plan:
          </Typography>
          <Select
            value={selectedPlan.name}
            onChange={handlePlanChange}
            sx={{
              marginRight: "50%",
              minWidth: "150px",
              border: `3px solid ${colors.primary[100]}`,
            }}
            label="Workout Plan"
          >
            {workoutPlans.map((plan) => (
              <MenuItem key={plan.id} value={plan.name}>
                {plan.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <DataGrid
          rows={selectedPlan.exercises}
          columns={columns}
          disableColumnMenu
          disableColumnSelector
        />
      </Box>
    </Box>
  );
};

export default Workout;
