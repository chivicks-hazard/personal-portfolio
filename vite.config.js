import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  assetsInclude: ["**/*.mkv", "**/*.gif"],
  server: {
    port: 3456,
  },
  optimizeDeps: {
    include: ["react-router-dom"],
  },
});
