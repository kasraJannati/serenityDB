module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '92a4b59aa6f3c11c406443f24ca13aff'),
  },
});
