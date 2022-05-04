module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "f35ee16a80bc461cf75c1a0dadf9a31a"),
  },
});
