import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
   build: {
    rollupOptions: {
      input: {
        main: "index.html",
        shopcard: "shopcard.html",
        guides: "guides.html",
        about: "about.html",
        special: "special.html",
        opportunities: "opportunities.html",
      },
    },
  },
});
