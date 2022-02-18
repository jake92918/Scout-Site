module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5629d124c280ead09db5cc0db7adbc45'),
  },
});
