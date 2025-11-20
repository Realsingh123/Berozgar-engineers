// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: "dist",
//     sourcemap: false,           // disable sourcemaps for smaller build
//     minify: "esbuild",          // fastest minifier (default)
//     cssCodeSplit: true,         // better performance for large apps
//     reportCompressedSize: true, // show gzip/brotli sizes
//     chunkSizeWarningLimit: 800, // prevent unnecessary warnings
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           // splits big dependencies automatically
//           if (id.includes("node_modules")) {
//             return id.toString().split("node_modules/")[1].split("/")[0];
//           }
//         },
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
