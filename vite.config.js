import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(), // Add the React plugin here
    imagemin({
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.65, 0.80],
        speed: 4,
      },
      // Add more options as needed
    }),
  ],
});
