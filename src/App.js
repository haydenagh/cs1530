import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Exercise from "./scenes/exercises";
import Workout from "./scenes/workouts";
import CreateWorkouts from "./scenes/createplan";
import Goals from "./scenes/goals";
import Food from "./scenes/food";
import Login from "./scenes/login";
import Session from "./scenes/session";
import CreateAccount from "./scenes/account";
import { LogProvider } from './LogContext';

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
            <LogProvider> 
              <Routes>=
                <Route path="/" element={<Session />}/>
                <Route path="/exercises" element={<Exercise />}/>
                <Route path="/wplans" element={<Workout />}/>
                <Route path="/createwplan" element={<CreateWorkouts />}/>
                <Route path="/goals" element={<Goals />}/>
                <Route path="/food" element={<Food />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/session" element={<Session />}/>
                <Route path="/account" element={<CreateAccount />}/>
              </Routes>
            </LogProvider>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
