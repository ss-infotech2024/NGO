import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // Increase limit (KB)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // separate vendor chunk
        },
      },
    },
  },
});
