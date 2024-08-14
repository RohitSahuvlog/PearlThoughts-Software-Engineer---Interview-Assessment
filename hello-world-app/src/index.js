const { sendWithRetry } = require('../../notification-service/src/retryPolicy');

async function main() {
    try {
        await sendWithRetry('sahu86744@gmail.com', 'Hello World', 'This is a Hello World email from the notification service.');
    } catch (error) {
        console.error('Failed to send Hello World email:', error.message);
    }
}

main();
