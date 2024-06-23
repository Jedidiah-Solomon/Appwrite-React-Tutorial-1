import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [react()],
    server: {
      host: "127.0.0.1", // Specify the hostname, "0.0.0.0" makes the server accessible externally. IP addresses the server should listen on
      port: 3000,
      open: true,
      cors: true, // Enable CORS
      strictPort: true, //if true means Exit if the port is already in use (error is shown) but if false vite finds the next available port
      hmr: {
        protocol: "ws", //ws - WebSocket protocol (better for dev and it is default) or wss - WebSocket Secure protocol (better for production)
      },
      watch: {
        ignored: ["**/node_modules/**", "**/dist/**", "**/*.log", "**/.git/**"],
      },
      middlewareMode: false,
    },
    build: {
      sourcemap: isProduction,
    },
  };
});
