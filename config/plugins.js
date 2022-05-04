module.exports = ({ env }) => ({
  email: {
    config: {
      provider: env("EMAIL_PROVIDER"),
      providerOptions: {
        host: env("EMAIL_SMTP_HOST", "mail.trezerre.com"), //SMTP Host
        port: env("EMAIL_SMTP_PORT", 465), //SMTP Port
        secure: true,
        username: env("EMAIL_SMTP_USER", "no-reply@trezerre.com"),
        password: env("EMAIL_SMTP_PASS", "trezerre1noreply"),
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      from: env("EMAIL_ADDRESS_FROM", "no-reply@trezerre.com"),
      replyTo: env("EMAIL_ADDRESS_REPLY", "no-reply@trezerre.com"),
    },
  },
  wysiwyg: {
    enabled: true,
    resolve: "./src/plugins/wysiwyg",
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit", // Community providers need to have the full package name
      providerOptions: {
        publicKey: "public_vQexfMlQlNmKwNtgCZ4nOvhgb/s=",
        privateKey: "private_oh9BE6QsVjCvBaGv8qSpVbsW9D8=",
        urlEndpoint: "https://ik.imagekit.io/mjv6jewv5", // Example: https://ik.imagekit.io/username

        // Optional
        params: {
          folder: "/cvarquitectos", // Defaults to "/" if value is not supplied
        },
      },
    },
  },
});
