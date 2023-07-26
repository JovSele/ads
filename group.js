const axios = require('axios');

const API_TOKEN = '6285256102:AAHCYHtDP2aUmlJwmmzgUDxcNebz7ZoHxa0';

async function getChatId() {
  try {
    const apiUrl = `https://api.telegram.org/bot${API_TOKEN}/getUpdates`;
    const response = await axios.get(apiUrl);

    if (response.data && response.data.result && response.data.result.length > 0) {
      const chatId = response.data.result[0].message.chat.id;
      console.log('Your Telegram Group Chat ID:', chatId);
    } else {
      console.log('No recent updates found. Make sure you have interacted with the bot in the group.');
    }
  } catch (err) {
    console.error('Error occurred:', err);
  }
}

getChatId();