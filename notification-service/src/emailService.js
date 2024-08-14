const nodemailer = require('nodemailer');
const config = require('./config');

const transporter = nodemailer.createTransport(config.emailServiceConfig);

async function sendEmail(to, subject, text) {
    try {
        const info = await transporter.sendMail({
            from: config.emailServiceConfig.auth.user,
            to,
            subject,
            text
        });
        console.log('Email sent:', info.response);
        return true;
    } catch (error) {
        console.error('Failed to send email:', error.message);
        throw error;
    }
}

module.exports = {
    sendEmail
};
