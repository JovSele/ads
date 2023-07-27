const puppeteer = require('puppeteer');
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Function to send the message
async function sendMessage() {
  try {
    // Read the content of the info.json file
    const info = fs.readFileSync('info.json', 'utf8');
    const infoData = JSON.parse(info);

    // Extract the data you want to use as the message
    const message = `Date: ${infoData.date}, Status: ${infoData.status}`;

    // Launch Puppeteer and navigate to Telegram Web
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Modify the URL to use the dynamic message
    const telegramUrl = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${encodeURIComponent(message)}`;
    await page.goto(telegramUrl);

    console.log('Message sent successfully to Telegram group!');

    await browser.close();
  } catch (err) {
    console.error('Error occurred:', err);
  }
}

//send message imidiately
sendMessage();

/*
// Send the message every 3 minutes
const intervalInMinutes = 3; //here change time for resending
setInterval(sendMessage, intervalInMinutes * 60 * 1000);
*/