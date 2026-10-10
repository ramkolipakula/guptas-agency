import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      autoCodeSplitting: false,
    }),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
    tsconfigPaths: true,
  },
});
