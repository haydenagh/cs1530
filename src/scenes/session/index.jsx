import { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Typography } from "@mui/material";
import Header from "../../components/Header";
import { workoutPlans } from "../../data/mockData";

const Session = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(workoutPlans[0]);
  const [loggedData, setLoggedData] = useState({});

  const handleWorkoutChange = (event) => {
    const workoutId = Number(event.target.value);
    const workout = workoutPlans.find((w) => w.id === workoutId);
    setSelectedWorkout(workout);
    setLoggedData({});
  };

  const handleDataChange = (event, exerciseId) => {
    const { name, value } = event.target;
    setLoggedData((prevData) => ({
      ...prevData,
      [exerciseId]: {
        ...prevData[exerciseId],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loggedData);
  };

  return (
    <Box m="20px">
      <Header title="SESSION" subtitle="Log your workout session" />
      <Box m="40px 0">
        <Box mb={2}>
          <Typography variant="h6">Select Workout:</Typography>
          <select value={selectedWorkout.id} onChange={handleWorkoutChange}>
            {workoutPlans.map((workout) => (
              <option key={workout.id} value={workout.id}>
                {workout.name}
              </option>
            ))}
          </select>
        </Box>
        <Box mb={2}>
          <Typography variant="h6">Exercises:</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Exercise Name</TableCell>
                  <TableCell align="center">Sets</TableCell>
                  <TableCell align="center">Reps</TableCell>
                  <TableCell align="center">Weight</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedWorkout.exercises.map((exercise) => (
                  <TableRow key={exercise.id}>
                    <TableCell>{exercise.name}</TableCell>
                    <TableCell align="center">
                      <TextField
                        type="number"
                        name={`${exercise.id}-sets`}
                        value={loggedData[exercise.id]?.sets || ""}
                        onChange={(event) => handleDataChange(event, exercise.id)}
                        inputProps={{style: {color: 'white'}}}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        type="number"
                        name={`${exercise.id}-reps`}
                        value={loggedData[exercise.id]?.reps || ""}
                        onChange={(event) => handleDataChange(event, exercise.id)}
                        inputProps={{style: {color: 'white'}}}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        type="number"
                        name={`${exercise.id}-weight`}
                        value={loggedData[exercise.id]?.weight || ""}
                        onChange={(event) => handleDataChange(event, exercise.id)}
                        inputProps={{style: {color: 'white'}}}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box mt={3}>
          <Button variant="contained" onClick={handleSubmit}>
            Log Session
          </Button>
        </Box>
      </Box>
      {Object.keys(loggedData).length > 0 && (
        <Box m="40px 0">
          <Typography variant="h6" mb={2}>Session Log:</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Exercise Name</TableCell>
                  <TableCell align="center">Sets</TableCell>
                  <TableCell align="center">Reps</TableCell>
                  <TableCell align="center">Weight</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedWorkout.exercises.map((exercise) => (
                  loggedData[exercise.id] && (
                    <TableRow key={exercise.id}>
                      <TableCell>{exercise.name}</TableCell>
                      <TableCell align="center">{loggedData[exercise.id].sets}</TableCell>
                      <TableCell align="center">{loggedData[exercise.id].reps}</TableCell>
                      <TableCell align="center">{loggedData[exercise.id].weight}</TableCell>
                    </TableRow>
                  )
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  )}
export default Session;
