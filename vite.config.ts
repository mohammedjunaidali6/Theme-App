import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server"; // adjust if needed

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // only active during development
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: "/Theme-App/", // GitHub Pages repo name
  plugins: [
    react(),
    ...(mode === "development" ? [expressPlugin()] : []),
  ],
  build: {
    outDir: "dist", // must match gh-pages deploy target
  },
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        path.resolve(__dirname, "client"), // 👈 Add this line
        path.resolve(__dirname, "client/src"),
        path.resolve(__dirname, "shared")
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"),
      "@shared": path.resolve(__dirname, "shared")
    }
  }
}));
