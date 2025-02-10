import { useEffect, useState } from "react";
import { Product } from "../Models/Product";
import Catalog from "../../features/catalog/Catalog";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, SetDarkMode] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5269/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const palleteType = darkMode ? "dark" : "light";
  const toggleBar = () => {
    SetDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleBar={toggleBar} darkMode={darkMode} />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle,#1e3aBa,#111B27)"
            : "radial-gradient(circle,#baecf9,#f0f9ff)",
          py: 6,
        }}
      >
        <Container maxWidth="xl" sx={{ marginTop: 8 }}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
