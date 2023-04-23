import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  // This Navbar is used only for changing theme from dark and light, but can add more icons + functionalities
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* icons */}
      <Box display="flex" marginLeft='auto' marginRight='0'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
             ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;