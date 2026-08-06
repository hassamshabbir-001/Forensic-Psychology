import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://forensicpsychology.pro',
  output: 'static',
  build: {
    format: 'directory'
  }
});
