import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const defaultBasePath = "/";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? defaultBasePath,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist/pages",
    emptyOutDir: true,
  },
});
