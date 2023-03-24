const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.NEXT_PUBLIC_EMAIL_KEY);

export default function sendEmail(req, res) {

  const msg = {
    to: `${req.body.email}`,
    from: 'chargeandtarry@gmail.com', // Use the email address or domain you verified above
    subject: 'Charge Complete',
    text: 'Your charge has been completed. Thank you for using Charge and Tarry'
  };

      sgMail
    .send(msg)
    .then(() => {}, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });

}