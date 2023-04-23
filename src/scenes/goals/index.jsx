import React, { useState } from "react";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Header from "../../components/Header";

const Goals = () => {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);
  const [goalsCompleted, setGoalsCompleted] = useState(0);

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  // Adds goals
  const handleAddGoal = () => {
    setGoalsList([...goalsList, goal]);
    setGoal("");
  };

  // Deletes goals
  const handleDeleteGoal = (index) => {
    setGoalsList(goalsList.filter((_, i) => i !== index));
  };

  // Increments based off of coals completed
  const handleCompleteGoal = (index) => {
    setGoalsCompleted(goalsCompleted + 1);
    handleDeleteGoal(index);
  };

  return (
    <Box m="20px">
      <Header title="GOALS" subtitle="Write down your goals and log them" />
      <Box m="40px 0">
        <TextField
          label="Enter your goal"
          variant="outlined"
          fullWidth
          value={goal}
          onChange={handleGoalChange}
          margin="normal"
        />
        {/* ADD GOAL SECTION */}
        <Box mt={2}>
          <Button variant="contained" onClick={handleAddGoal}>
            Add Goal
          </Button>
        </Box>
        <Box mt={3}>
          <Typography variant="h6">Goals List:</Typography> {/* LIST OF GOALS */}
          {goalsList.map((goal, index) => (
            <Box key={index} display="flex" alignItems="center" my={2} p={2} border={1}>
              {/* CHECKMARK */}
              <IconButton color="success" onClick={() => handleCompleteGoal(index)}>
                <CheckCircleOutlineIcon />
              </IconButton>
              {/* DELETE BUTTON*/}
              <IconButton color="error" onClick={() => handleDeleteGoal(index)}>
                <DeleteIcon />
              </IconButton>
              <Typography variant="body1" ml={2}>{goal}</Typography>
            </Box>
          ))}

        </Box>
        <Box mt={3}> {/* COMPLETION COUNTER */}
          <Typography variant="h6">Goals Completed: {goalsCompleted}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Goals;
