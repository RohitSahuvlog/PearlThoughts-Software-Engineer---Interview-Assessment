const { sendWithRetry } = require('./retryPolicy');

async function main() {
    try {
        await sendWithRetry('sahu86744@gmail.com', 'Test Email', 'This is a test email with retry logic.');
    } catch (error) {
        console.error('Final failure:', error.message);
    }
}

main();
