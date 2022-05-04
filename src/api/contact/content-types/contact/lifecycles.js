module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "emiliano@creativedog.agency",
        from: "no-reply@trezerre.com",
        subject: "CV Arquitectos",
        text: `${result.fullName} ${result.email} te ha enviado un mensaje desde la web de CV Arquitectos. ${result.question}`,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
