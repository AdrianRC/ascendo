const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (req, res) => {
  const { name, email, phone, subject, text } = JSON.parse(req.body)
  const msg = {
    to: 'adrn@hey.com',
    from: 'u.borrell@ascendo.do',
    subject,
    html: `
      <div>${text}</div>
      <br/>
      <p><strong>Nombre: </strong>${name}</p>
      <p><strong>Email: </strong>${email}</p>
      <p><strong>Teléfono: </strong>${phone}</p>
    `,
  }
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send('OK!')
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}
