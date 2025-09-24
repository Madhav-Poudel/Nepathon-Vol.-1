import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createRequire } from 'module';

// Try to load optional 'lovable-tagger' plugin if it's installed. If not,
// we continue without it so the project can build.
let componentTagger: any = undefined;
try {
  const require = createRequire(import.meta.url);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pkg = require('lovable-tagger');
  componentTagger = pkg?.componentTagger;
} catch (e) {
  // optional dependency not installed; ignore
  componentTagger = undefined;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger ? componentTagger() : false].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
