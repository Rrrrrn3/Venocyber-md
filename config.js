//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255749395117";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURrV0hMdzAyOU8vL0Q3NGdLekhzWWpLMExiRXJvN0JCcDlSc3BxMmdGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEU5SzNxMHM3RjJDem84TW5hU1ZZTXI3ZVpNZXlBODZoY3RqbjdnbTR4RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrREZKN21LQmR4NVpFOUVoOUN3WVJYYnFIZ0RkOE9Ub3R0SzJCQkFmdlYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZzZOZndKUmxSRnE1dTVYRDRSL3k1cGdpem1kR1hkUDh0U2krL25iZ0Z3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBN1VDMzl0WG8yUDVFNkQ5NWRRRS9BWUpwRzYzUUxZRnJQTGJnaGJFSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNyNmNYd0JmekpBUHhSQ2tsV1Y4b29qRE5yRFJkT05Cd3Y2WHRHNHgzaEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0pSTXA1b29jRlVKcmNxL2pSdjQ2WWFYZGJCRFc1THJTZFZTK2N2WStsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzJML1FJeXF6SFNDamZNOWNMa3BHVlFLeHEyU0pldVM5TVJNUjVKcFdXZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZycVVRODBFUnhGcno5V3RNWXBMWUQxbmVOOTlTN2VQc1VjQ0w1NlU3YWFYdjIvQTExeVByNk9IdnBiOWtqYlVnWXNFMHFZV3lMcjdkRXZZRy96U0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJVb3RHWkZIMHlGRElYNkxGbGk2aUU0MTFuakxUVzg3TUFVOUtad1U0czBnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjNGFvWHUtQVQyaUxuVGdEZ3N3OG93IiwicGhvbmVJZCI6IjQ4YTVjMGI3LTNhZDktNGE0NC05OTk0LTFhNmYxMWE3ZDdlMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUlZrQU9BcFV6QlNYSUlGYTFHQ0tJU1JWdDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHg2Y0I4RUpNY1ZES2RxSFNRTVV4K2xsMGdnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ1TUxGTjZNIiwibWUiOnsiaWQiOiIyNTU3NDkzOTUxMTc6M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmladXFBRkVPQ0w5YmdHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0g3YnBWckVaVGcybzRLSVpYdkZlRUtCMWpYanBFRE4zVFVxN25ycnNDZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoic1N2MnZRcXdXd3AwZnowWG9ackhnblF1RlhHSWhnM0Q0SEZtTXluWTRWMW9hWnQwTklINURVVVkvdnUxRGRiRi93LzgzWFZYVkR0YlhMMnpST0JxQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFOa0NaWEF4czRlK0JxS1lqS09vM1dObjBMTkh2MHZwamtFY0svY2RHdVg0M256Q29YWk5jWjhONSszakNVNU0zN0pwZVdvQXMxekVvd3l4OWF6OER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzQ5Mzk1MTE3OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGgrMjZWYXhHVTROcU9DaUdWN3hYaENnZFkxNDZSQXpkMDFLdTU2NjdBbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTk3MTY5M30="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
