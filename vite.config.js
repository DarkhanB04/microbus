import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/microbus/",
  plugins: [react()],
  build: {
    outDir: "dist/microbus" // Output to a subdirectory for clarity
  },
});
