module.exports = {
  async rewrites() {
    return [
      { source: "/migrations", destination: "/api/v1/migrations" },
    ];
  },
};