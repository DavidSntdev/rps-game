import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/rps-game",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          animations: ["framer-motion"],
          ui: ["@nextui-org/react", "react-icons"], 
        },
      },
    },
  },
});
