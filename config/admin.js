module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f11c33da951c43dfa0f273525d2aa49'),
  },
});
