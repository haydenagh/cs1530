import { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem } from "@mui/material";
import { workoutPlans } from "../../data/mockData";
import Header from "../../components/Header";
import "./Session.css";

const Session = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(workoutPlans[0]);
  const [workoutLog, setWorkoutLog] = useState([]);

  const handleWorkoutChange = (event) => {
    setSelectedWorkout(workoutPlans.find((plan) => plan.id === event.target.value));
    setWorkoutLog([]);
  };

  const handleLogWorkout = () => {
    setWorkoutLog(selectedWorkout.exercises.map((exercise) => {
      const sets = document.getElementById(`sets-${exercise.id}`).value;
      const reps = document.getElementById(`reps-${exercise.id}`).value;
      const weight = document.getElementById(`weight-${exercise.id}`).value;
      return { name: exercise.name, sets, reps, weight };
    }));
  };return (
    <div>
      <Header title="Session" />
      <Box sx={{ m: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Select a workout program:
        </Typography>
        <TextField
          select
          fullWidth
          value={selectedWorkout.id}
          onChange={handleWorkoutChange}
        >
          {workoutPlans.map((plan) => (
            <MenuItem key={plan.id} value={plan.id}>
              {plan.name}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Exercises:
        </Typography>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Weight (lbs)</th>
            </tr>
          </thead>
          <tbody>
            {selectedWorkout.exercises.map((exercise) => (
              <tr key={exercise.id}>
                <td>{exercise.name}</td>
                <td>
                  <TextField type="number" id={`sets-${exercise.id}`} />
                </td>
                <td>
                  <TextField type="number" id={`reps-${exercise.id}`} />
                </td>
                <td>
                  <TextField type="number" id={`weight-${exercise.id}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="contained" onClick={handleLogWorkout} sx={{ mt: 2 }}>
          Log Workout
        </Button>
      </Box>
      {workoutLog.length > 0 && (
        <Box sx={{ m: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Workout Log:
          </Typography>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Weight (lbs)</th>
              </tr>
            </thead>
            <tbody>
              {workoutLog.map((exercise, index) => (
                <tr key={index}>
                  <td>{exercise.name}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                  <td>{exercise.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      )}
    </div>
  );}

  export default Session;