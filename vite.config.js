import { defineConfig } from 'vite';
import * as glob from 'glob';
import path from 'node:path';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';
import handlebars from 'vite-plugin-handlebars';

import handlerBarsContext from './variables.js';

export default defineConfig({
  base: "/ProyectoFinal/",
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync('./*.html').map(file => [
          path.basename(file, path.extname(file)), path.resolve(__dirname, file)
        ])
      ),
    },
  },
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'partials'),
      context: handlerBarsContext,
    }),
    htmlPurge({}),
    ViteMinifyPlugin({}),
  ]
});
