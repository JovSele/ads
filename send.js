const puppeteer = require('puppeteer');
const axios = require('axios');

(async () => {
  const API_TOKEN = '6285256102:AAHCYHtDP2aUmlJwmmzgUDxcNebz7ZoHxa0';
  const CHAT_ID = '@JovSeleBot';
  const message = 'helloworld';

  try {
    // Launch Puppeteer and navigate to Telegram Web
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://web.telegram.org');

    // Wait for user to login manually
    console.log('Please log in to Telegram Web if you haven\'t already.');
    await page.waitForNavigation();

    // Find the chat input field and send the message
    await page.waitForSelector('div[contenteditable="true"]');
    await page.type('div[contenteditable="true"]', message);
    await page.keyboard.press('Enter');

    // Close the browser
    await browser.close();

    // Send the same message via the Telegram Bot API to the group
    const apiUrl = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;
    await axios.post(apiUrl, {
      chat_id: CHAT_ID,
      text: message,
    });

    console.log('Message sent successfully to Telegram group!');
  } catch (err) {
    console.error('Error occurred:', err);
  }
})();
