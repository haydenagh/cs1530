import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  const handleCreateAccount = () => {
    // Create a new account object with the form data
    const newAccount = {
      name: name,
      email: email,
      username: username,
      password: password
    };
  
    // Get the existing accounts from local storage
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
  
    // Add the new account to the array of existing accounts
    existingAccounts.push(newAccount);
  
    // Store the updated accounts in local storage
    localStorage.setItem("accounts", JSON.stringify(existingAccounts));
  
    // Display a success message to the user
    alert(`Account created successfully. Welcome, ${name}!`);
  };
  

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      {accountCreated ? (
        <Typography variant="h4" gutterBottom>
          Welcome, {name}!
        </Typography>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Create Account
          </Typography>
          <Box component="form" onSubmit={handleCreateAccount} sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField id="name" label="Name" value={name} onChange={(event) => setName(event.target.value)} required />
            <TextField id="email" label="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <TextField id="username" label="Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
            <TextField id="password" type="password" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            <Button type="submit" variant="contained">
              Create Account
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CreateAccount;
