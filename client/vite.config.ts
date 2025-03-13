import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
  build: {
    outDir: "../API/wwwroot", // This automatically places the build files in .NET's wwwroot
    emptyOutDir: true, // Ensures old files are cleared before building
  },
});
