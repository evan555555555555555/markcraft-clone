/**
 * @type {import('vite').UserConfig}
 */
export default {
  // Relative base so the built dist/ runs from any folder (or zipped + emailed).
  base: './',
  build: {
    sourcemap: true,
    target: 'es2020'
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false
  }
};
