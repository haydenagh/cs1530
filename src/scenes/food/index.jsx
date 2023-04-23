// Food.js
import { useContext, useState } from 'react';
import { Box, TextField, Button, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Header from '../../components/Header';
import { LogContext } from '../../LogContext';

const Food = () => {
  const { foodLogs, handleSubmit } = useContext(LogContext);
  const [mealType, setMealType] = useState('');
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);

  const handleMealTypeChange = (event) => {
    setMealType(event.target.value);
  };

  const handleProteinChange = (event) => {
    setProtein(Number(event.target.value));
  };

  const handleCarbsChange = (event) => {
    setCarbs(Number(event.target.value));
  };

  const handleFatsChange = (event) => {
    setFats(Number(event.target.value));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newFoodLog = {
      mealType,
      protein,
      carbs,
      fats,
      calories: protein * 4 + carbs * 4 + fats * 8,
    };
    handleSubmit(newFoodLog);
    setMealType('');
    setProtein(0);
    setCarbs(0);
    setFats(0);
  };

  const macros = foodLogs.reduce(
    (acc, curr) => {
      acc.protein += curr.protein;
      acc.carbs += curr.carbs;
      acc.fats += curr.fats;
      acc.calories += curr.calories;
      return acc;
    },
    { protein: 0, carbs: 0, fats: 0, calories: 0 }
  );return (
    <Box m="20px">
      <div>
        <Header />
        <form onSubmit={handleFormSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Typography variant="h5">Add Food</Typography>

            {/* Meal Type */}
            <TextField
              label="Meal Type"
              variant="outlined"
              margin="normal"
              value={mealType}
              onChange={handleMealTypeChange}
            />
            {/* Protein */}
            <TextField
              label="Protein (g)"
              variant="outlined"
              margin="normal"
              type="number"
              value={protein}
              onChange={handleProteinChange}
            />
            {/* Carbs */}
            <TextField
              label="Carbs (g)"
              variant="outlined"
              margin="normal"
              type="number"
              value={carbs}
              onChange={handleCarbsChange}
            />
            {/* Fats */}
            <TextField
              label="Fats (g)"
              variant="outlined"
              margin="normal"
              type="number"
              value={fats}
              onChange={handleFatsChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
          </Box>
        </form>
        {foodLogs.length > 0 ? (
          <Box mb={2}>
            {/* Table Outline */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Meal Type</TableCell>
                  <TableCell>Protein (g)</TableCell>
                  <TableCell>Carbs (g)</TableCell>
                  <TableCell>Fats (g)</TableCell>
                  <TableCell>Calories</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* "Logs" food */}
                {foodLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell>{log.mealType}</TableCell>
                    <TableCell>{log.protein}</TableCell>
                    <TableCell>{log.carbs}</TableCell>
                    <TableCell>{log.fats}</TableCell>
                    <TableCell>{log.calories}</TableCell>
                  </TableRow>
                ))}
                {/* Calculates total */}
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell>{macros.protein}</TableCell>
                  <TableCell>{macros.carbs}</TableCell>
                  <TableCell>{macros.fats}</TableCell>
                  <TableCell>{macros.calories}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        ) : ( 
          <Typography>No food logs yet.</Typography> /* If no food logs, this will display */
        )}
      </div>
    </Box>
  );
}
export default Food;