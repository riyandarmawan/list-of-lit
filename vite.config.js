/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/list-of-lit/',
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@data": path.resolve(__dirname, "src/data"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@apis": path.resolve(__dirname, "src/apis"),
    },
  },
});
