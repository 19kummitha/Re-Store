import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
type Props = {
  toggleBar: () => void;
  darkMode: boolean;
};
export default function NavBar({ darkMode, toggleBar }: Props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <IconButton onClick={toggleBar}>
          {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
