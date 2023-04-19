import { useState } from "react";
  import { Box, TextField, Button, Typography } from "@mui/material";
  import { dataExercises } from "../../data/mockData";
  import Header from "../../components/Header";
  import "./CreateWorkouts.css";
  
  const CreateWorkouts = () => {
    const [workoutName, setWorkoutName] = useState("");
    const [selectedExercises, setSelectedExercises] = useState([]);
  
    const handleWorkoutNameChange = (event) => {
      setWorkoutName(event.target.value);
    };
    
    const handleExerciseSelect = (event) => {
      const exerciseId = Number(event.target.value);
      const exercise = dataExercises.find((e) => e.id === exerciseId);
      setSelectedExercises((prevSelectedExercises) => [
        ...prevSelectedExercises,
        exercise,
      ]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with workoutName and selectedExercises
    };
  
    return (
      <Box m="20px">
        <Header title="CREATE WORKOUT" subtitle="Create a new workout plan" />
        <Box m="40px 0">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Workout Name"
              variant="outlined"
              fullWidth
              value={workoutName}
              onChange={handleWorkoutNameChange}
              margin="normal"
            />
            <Box mt={2}>
              <Typography variant="h6">Select Exercises:</Typography>
              <table>
                <thead>
                  <tr>
                    <th>Exercise Name</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {dataExercises.map((exercise) => (
                    <tr key={exercise.id}>
                      <td>
                        <label>
                          <input
                            type="checkbox"
                            value={exercise.id}
                            onChange={handleExerciseSelect}
                          />
                          <span>{exercise.exerciseName}</span>
                        </label>
                      </td>
                      <td>
                        <input type="number" name={`${exercise.id}-sets`} />
                      </td>
                      <td>
                        <input type="number" name={`${exercise.id}-reps`} />
                      </td>
                      <td>
                        <input type="number" name={`${exercise.id}-weight`} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
            <Box mt={3}>
              <Button variant="contained" type="submit">
                Create Workout
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    );
  };

  export default CreateWorkouts;