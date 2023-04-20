import { useState } from "react";
import { testLogin } from "../../data/mockData";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = testLogin.find((user) => user.user === username && user.pass === password);
    if (user) {
      setLoggedInUser(user.user);
      setLoggedIn(true);
    } else {
      alert("Invalid username or password.");
    }
  };

  if (loggedIn) {
    return <Typography variant="h4">Logged in. Welcome, {loggedInUser}!</Typography>;
  }
  
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField id="username" label="Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
          <TextField id="password" type="password" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Link to="/account" style={{ textDecoration: "none" }}>
              <Button type="button" variant="contained" sx={{ mt: "1rem", width: "100%" }}>
                 Create Account
          </Button>
    </Link>
        </Box>
      </Box>
    );
  };
  

export default Login;
