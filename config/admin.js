module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71b3627dc3a94e1f44b9e3bf2cdbd8ef'),
  },
});
