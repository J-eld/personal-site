const sgMail = require('@sendgrid/mail')

export default (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: process.env.EMAIL,
        from: process.env.EMAIL, 
        subject: 'Contact for Jad Eldik',
        text: `
        From: ${req.body.name}, ${req.body.email}
        Message: ${req.body.message}
        `,
    }
    if (req.body.name && req.body.email && req.body.message) {
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            res.status(200).send('Message sent')
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('An error occurred')
        })
    } else {
        res.status(400).send('An error occurred')
    }
}