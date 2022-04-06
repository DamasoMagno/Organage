module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ce42e42aa521ab933922acc94d5d963f'),
  },
});
