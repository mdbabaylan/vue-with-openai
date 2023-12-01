// openai.js
const OpenAI = require('openai');

console.log(process.env.VUE_APP_OPENAI_API_KEY);
const apiKey = process.env.VUE_APP_OPENAI_API_KEY;
const openai = new OpenAI({apiKey: apiKey, dangerouslyAllowBrowser: true});

module.exports = openai;