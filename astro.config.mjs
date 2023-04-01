import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    outDir:  './docs',
    site: 'https://duwansierra.github.io',
    vite: {
        build: {
          rollupOptions: {
            output: {
              assetFileNames: '[name][extname]',
            }
          }
        }
      }
});
