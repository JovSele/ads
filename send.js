const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

(async () => {

  try {
    // Read the content of the info.json file
    const info = fs.readFileSync('info.json', 'utf8');
    const infoData = JSON.parse(info);

    // Extract the data you want to use as the message
    const message = `Date: ${infoData.date}, Status: ${infoData.status}`;


    // Launch Puppeteer and navigate to Telegram Web
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    //await page.goto('https://api.telegram.org/bot6640516640:AAF8pAWgtQbKob8T_ZB4apVgPfG3gr4RMO0/sendMessage?chat_id=5032665877&text=Hello Word from Puppeteer');

    // Modify the URL to use the dynamic message
    //const telegramUrl = `https://api.telegram.org/bot6640516640:AAF8pAWgtQbKob8T_ZB4apVgPfG3gr4RMO0/sendMessage?chat_id=5032665877&text=${encodeURIComponent(message)}`;
    const telegramUrl = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${encodeURIComponent(message)}`;
    await page.goto(telegramUrl);

    console.log('Message sent successfully to Telegram group!');

    await browser.close();

  } catch (err) {
    console.error('Error occurred:', err);
  }

})();
