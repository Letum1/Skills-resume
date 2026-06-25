import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const rawPort = process.env.PORT ?? "3000";
const port = Number(rawPort);

const basePath = process.env.BASE_PATH ?? "/";

let runtimeErrorOverlay: any = null;
let cartographer: any = null;
let devBanner: any = null;

try {
  runtimeErrorOverlay = await import("@replit/vite-plugin-runtime-error-modal");
} catch {}

try {
  const cartographerMod = await import("@replit/vite-plugin-cartographer");
  cartographer = cartographerMod.cartographer;
} catch {}

try {
  const devBannerMod = await import("@replit/vite-plugin-dev-banner");
  devBanner = devBannerMod.devBanner;
} catch {}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(runtimeErrorOverlay ? [runtimeErrorOverlay.default()] : []),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined &&
    cartographer &&
    devBanner
      ? [
          cartographer({
            root: path.resolve(import.meta.dirname, ".."),
          }),
          devBanner(),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: Number.isNaN(port) || port <= 0 ? 3000 : port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port: Number.isNaN(port) || port <= 0 ? 3000 : port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
