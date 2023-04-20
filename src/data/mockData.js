import { tokens } from "../theme";
export const testLogin = [
  {
    id: 1,
    user: 'admin',
    pass: 'pass'
  },
  {
    id: 1,
    user: 'admin4',
    pass: 'pass42'
  }
]
export const dataExercises = [
  {
    id: 1,
    exerciseName: "Squat",
    muscles: "glutes, quads, hamstrings, adductor, hip flexors, calves",
  },
  {
    id: 2,
    exerciseName: "Bench Press",
    muscles: "pecs, delts, triceps, biceps, serratus anterior",
  },
  {
    id: 3,
    exerciseName: "Deadlift",
    muscles: "glutes, hamstrings, core, back, traps",
  },
  {
    id: 4,
    exerciseName: "Military Press",
    muscles: "triceps, traps, shoulders (deltoids)",
  },
  {
    id: 5,
    exerciseName: "Lunge",
    muscles: "glutes, hamstrings, quads, calves",
  },
  {
    id: 6,
    exerciseName: "Bicep Curls",
    muscles: "biceps",
  },
  {
    id: 7,
    exerciseName: "Tricep Curls",
    muscles: "triceps",
  },
  {
    id: 8,
    exerciseName: "Seated Cable Rows",
    muscles: "upper back, traps, rhomboids, biceps",
  },
]
export const workoutPlans = [
  {
    id: 1,
    name: "Sample workout 1",
    exercises: [
      { id: 1, name: "Bench Press", sets: 3, reps: 5, weight: 125 },
      { id: 2, name: "Tricep Curls", sets: 3, reps: 8, weight: 80 },
      { id: 3, name: "Deadlift", sets: 3, reps: 5, weight: 250 },
    ],
  },
  {
    id: 2,
    name: "Sample workout 2",
    exercises: [
      { id: 1, name: "Squats", sets: 3, reps: 5, weight: 200 },
      { id: 2, name: "Lunges", sets: 4, reps: 8, weight: 25 },
      { id: 3, name: "Deadlift", sets: 3, reps: 8, weight: 100 },
    ],
  },
  {
    id: 3,
    name: "Sample workout 3",
    exercises: [
      { id: 1, name: "Bicep Curls", sets: 3, reps: 8, weight: 110 },
      { id: 2, name: "Rows", sets: 3, reps: 6, weight: 120 },
      { id: 3, name: "Military Press", sets: 3, reps: 8, weight: 70 },
    ],
  },
];