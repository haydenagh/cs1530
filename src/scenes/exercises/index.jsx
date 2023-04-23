import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { dataExercises } from "../../data/mockData";
import Header from "../../components/Header";

const Exercise = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // Gathers tokens from theme.js
  // Sets Exercise Table
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "exerciseName",
      headerName: "Exercise",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "muscles",
      headerName: "Muscle Groups",
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
      <Header title="EXERCISES" subtitle="A list of exercises!" />
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
      > {/* Gets data from mockData.js
            Change to DB data        */}
        <DataGrid checkboxSelection rows={dataExercises} columns={columns} />
      </Box>
    </Box>
  );
};

export default Exercise;
