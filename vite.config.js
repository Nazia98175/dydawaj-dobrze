import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        shopcard: "shopcard.html",
        guides: "guides.html",
        about: "about.html",
        special: "special.html",
      },
    },
  },
});
