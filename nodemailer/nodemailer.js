let nodemailer = require("nodemailer")



let nodeMailerTransport = () => {
    let nodeMailer = nodemailer.createTransport({
        host: process.env.EMAIL_SERVICE_PROVIDER,
        port: 587,
        secure: false, 
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        },

    })
    return nodeMailer
}


let sendMail = async (toWho, subject, text, html) => {
    let transporter = nodeMailerTransport()
    let info = await transporter.sendMail({
        from: process.env.GMAIL_USERNAME,
        to: toWho,
        subject: subject,
        text: text,
        html: html
      });
    return info
}


module.exports = {
    sendMail
}