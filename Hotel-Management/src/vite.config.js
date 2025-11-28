export default {
  server: {
    proxy: {
      "/rooms": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};