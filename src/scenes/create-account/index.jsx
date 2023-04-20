import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle create account logic here
    console.log("Creating account...");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Create Account
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField id="username" label="Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
        <TextField id="password" type="password" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        <TextField
          id="confirm-password"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <Button type="submit" variant="contained" sx={{ width: "100%" }}>
          Create Account
        </Button>
      </Box>
    </Box>
  );
};

export default CreateAccount;
