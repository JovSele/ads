SENDING MESSAGE TO TELEGRAM 
- the purpose of this script is to send messages from the activity of the VPS server (node.js code) to your Telegram account
- if the code will send continuous information from the activity, it is not necessary to check or be connected to the server(s) - everyone has their phone with them
- it has an advantage if the code runs on several VPS servers and the information goes from all VPS servers to one Telegram account

1.Create TelegramBot with @BotFather
- recieve API_TOKEN
- recieve CHAT_ID
( https://www.youtube.com/watch?v=Pj8mwuMZZvg )

2.Create .env file 
-everyone put yourself TOKEN and CHAT_ID to .env file

3.File info.json
- we send the data from the given file as a message to the Telegram account
- it is given as an example, the frequency of sending or the moment of sending can be adjusted (for example, execute the given script when an error occurs)
- it can be modified as needed

4.Install
npm i --save puppeteer
npm i --save fs
npm i --save dotenv
