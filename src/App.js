import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Exercise from "./scenes/exercises";
import Workout from "./scenes/workouts";
import CreateWorkouts from "./scenes/createplan";
import Goals from "./scenes/goals";
import Calendar from "./scenes/calendar";
import Weight from "./scenes/weight";
import Session from "./scenes/session";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/exercises" element={<Exercise />}/>
              <Route path="/wplans" element={<Workout />}/>
              <Route path="/createwplan" element={<CreateWorkouts />}/>
              <Route path="/goals" element={<Goals />}/>
              <Route path="/calendar" element={<Calendar />}/>
              <Route path="/weight" element={<Weight />}/>
              <Route path="/session" element={<Session />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;