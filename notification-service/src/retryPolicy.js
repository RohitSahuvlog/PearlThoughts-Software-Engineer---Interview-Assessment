const config = require('./config');
const { sendEmail } = require('./emailService');

async function sendWithRetry(to, subject, text) {
    let attempts = 0;
    while (attempts < config.maxRetries) {
        try {
            await sendEmail(to, subject, text);
            console.log(`Email sent successfully on attempt ${attempts + 1}`);
            return;
        } catch (error) {
            console.error(`Attempt ${attempts + 1} failed:`, error);
            attempts++;
            console.log(`Retry attempt ${attempts} failed. Retrying in ${config.retryDelay}ms...`);
            if (attempts < config.maxRetries) {
                await new Promise(resolve => setTimeout(resolve, config.retryDelay));
            } else {
                console.error('Max retry attempts reached. Email not sent.');
                throw new Error('Failed to send email after maximum retries.');
            }
        }
    }
}

module.exports = {
    sendWithRetry
};
