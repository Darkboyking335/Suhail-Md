const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237656317680";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_40_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDcxLFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyZTlWa2pVWU11OTVkbThpOVVtTzVhT2pmRi9XNGlOQU8vK21Ub2hyUE1jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzV0tlUWtZNFIxQ2EyN1Q2QmZIUjF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImVlMzE0MWRlLTkxMDEtNDI2Zi1hYzYwLTM5YzAzNWUxMjBjZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAyMTUsXG4gICAgICA3NyxcbiAgICAgIDIyNCxcbiAgICAgIDExMCxcbiAgICAgIDIwOSxcbiAgICAgIDI1NCxcbiAgICAgIDU4LFxuICAgICAgNjQsXG4gICAgICA2MixcbiAgICAgIDg1LFxuICAgICAgNzMsXG4gICAgICA1NCxcbiAgICAgIDIyNSxcbiAgICAgIDQ0LFxuICAgICAgMTkzLFxuICAgICAgMTk0LFxuICAgICAgMyxcbiAgICAgIDYzLFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTU1LFxuICAgICAgMjQ1LFxuICAgICAgMjU0LFxuICAgICAgNDQsXG4gICAgICA0MixcbiAgICAgIDExNixcbiAgICAgIDE0OCxcbiAgICAgIDE2MyxcbiAgICAgIDEzNixcbiAgICAgIDY1LFxuICAgICAgMTU4LFxuICAgICAgMjIyLFxuICAgICAgMjMxLFxuICAgICAgMTA2LFxuICAgICAgNjcsXG4gICAgICAxNjYsXG4gICAgICAzOSxcbiAgICAgIDUyLFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVY1M0tGN1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzIxMzkzMTk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFjdGl2ZSBUdlwiLFxuICAgIFwibGlkXCI6IFwiMjA1NTE4ODgzMTAyOTU6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbmp3Wk1CRU43QWhMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImh0dndnSVlTSy9kZUlZODVCVzBrWkhUTnFIL2YyRWxqRXNJY2dMc3g2blE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVXlXdFJmNXhadndvdWsxbXpsWFpyMHQzSTJENzlRTEZPU2RXSTVUbm1VT1Z3OHlLOVI3R25Lc1ZOalNnQ29mSG5Ea2lzQ0FWTk53Q3JpVUJQQkJVQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid3NtMldFODNnQmlYZkx3KzE0MWhPMGE0Q0hTL3hjMStJRTFLOWJMUVNVNDJkS3NEcFhoeW1zOG9iZTZHWlR5YVhRYzZyMWQ0Z2d3bU9sM1pOQnJxZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMjEzOTMxOTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MzU2MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHeTRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd5NC5qc29uIjogIntcImtleURhdGFcIjpcIkRlRmFhbmpSWTRUcUs1SVAvVTZ0OXY0UFNOQVpoRVExcXJOK09MNHZtUDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA5MzU5MDMyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "@",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝐊𝐋𝚫𝐔𝐒 𝚳𝚰𝐊𝚫𝚵𝐋𝐒𝚯𝚴 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒",
  packname: process.env.PACK_NAME || "𝐊𝐋𝚫𝐔𝐒 𝚳𝚰𝐊𝚫𝚵𝐋𝐒𝚯𝚴 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒",
  botname : process.env.BOT_NAME  || "𝐊𝐋𝚫𝐔𝐒 𝚳𝚰𝐊𝚫𝚵𝐋𝐒𝚯𝚴 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒",
  ownername:process.env.OWNER_NAME|| "𝐊𝐋𝚫𝐔𝐒 𝚳𝚰𝐊𝚫𝚵𝐋𝐒𝚯𝚴 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
