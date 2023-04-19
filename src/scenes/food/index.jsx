import { Box,TextField,Button,Typography,Table,TableBody,TableCell,TableHead,TableRow,} from "@mui/material";
  import React, { useState } from "react";
  import Header from "../../components/Header";
  
  const Food = () => {
    const [mealType, setMealType] = useState("");
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const [foodLogs, setFoodLogs] = useState([]);
  
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
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newFoodLog = {
        mealType,
        protein,
        carbs,
        fats,
        calories: protein * 4 + carbs * 4 + fats * 8,
      };
      setFoodLogs([newFoodLog, ...foodLogs]);
      setMealType("");
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
    );
  
    return (
        <Box m="20px">
            <div>
        <Box display="flex" justifyContent="space-between" alignItems="center" margin={5}>
        <Header title="FOOD LOG" subtitle="Log your food!" />
        </Box>
    </div>
            <Box m="40px 0">
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Meal Name"
                        variant="outlined"
                        fullWidth
                        value={mealType}
                        onChange={handleMealTypeChange}
                        margin="normal"
                    />
                    <Box mt={2}>
                        <Typography variant="h6">Nutrition Information:</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Meal Type</TableCell>
                                    <TableCell>Protein</TableCell>
                                    <TableCell>Carbs</TableCell>
                                    <TableCell>Fats</TableCell>
                                    <TableCell>Calories</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{mealType}</TableCell>
                                    <TableCell>
                                        <input
                                            type="number"
                                            name="protein"
                                            value={protein}
                                            onChange={handleProteinChange}
                                        />
                                        g
                                    </TableCell>
                                    <TableCell>
                                        <input
                                            type="number"
                                            name="carbs"
                                            value={carbs}
                                            onChange={handleCarbsChange}
                                        />
                                        g
                                    </TableCell>
                                    <TableCell>
                                        <input
                                            type="number"
                                            name="fats"
                                            value={fats}
                                            onChange={handleFatsChange}
                                        />
                                        g
                                    </TableCell>
                                    <TableCell>
                                        {protein * 4 + carbs * 4 + fats * 9} Cal
                                    </TableCell>
                                </TableRow>
                                {foodLogs.map((log, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{log.mealType}</TableCell>
                                        <TableCell>{log.protein}g</TableCell>
                                        <TableCell>{log.carbs}g</TableCell>
                                        <TableCell>{log.fats}g</TableCell>
                                        <TableCell>{log.calories} Cal</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                    <Box mt={3}>
                        <Button variant="contained" type="submit">
                            Log Food
                        </Button>
                    </Box>
                </form>
                {foodLogs.length > 0 && (
                    <Box mt={3}>
                        <Typography variant="h6">Total Macros:</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Macro</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Protein</TableCell>
                                    <TableCell>{macros.protein}g</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Carbs</TableCell>
                                    <TableCell>{macros.carbs}g</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Fats</TableCell>
                                    <TableCell>{macros.fats}g</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Total Calories</TableCell>
                                    <TableCell>{macros.calories} Cal</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                )}
            </Box>
        </Box>
    );}
  
  export default Food;