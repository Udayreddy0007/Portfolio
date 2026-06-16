import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, "");
  const rawPort = env.PORT ?? process.env.PORT ?? "5173";
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  const basePath = env.BASE_PATH ?? process.env.BASE_PATH ?? "/";

  const replitPlugins =
    process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? (
          await Promise.all([
            import("@replit/vite-plugin-runtime-error-modal").catch(() => null),
            import("@replit/vite-plugin-cartographer").catch(() => null),
            import("@replit/vite-plugin-dev-banner").catch(() => null),
          ])
        )
          .map((mod, index) => {
            if (!mod) return null;
            if (index === 0) return mod.default?.();
            if (index === 1)
              return mod.cartographer({
                root: path.resolve(import.meta.dirname, ".."),
              });
            return mod.devBanner();
          })
          .filter(Boolean)
      : [];

  return {
    base: basePath,
    plugins: [react(), tailwindcss(), ...replitPlugins],
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
      port,
      strictPort: false,
      host: true,
    },
    preview: {
      port,
      host: true,
    },
  };
});
