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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_05_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2LFxuICAgICAgICA2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICA1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICA2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRNWFPaVJlTVRuWVExdnEyN3d1NWMzSFNjUG50c2pndmNWeWdHb1c1SkpzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJazVpb1NPeVFvR20tU0RySF93VVdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhNDU2Y2M2LWNkM2MtNDE2ZC1iM2Q3LTc2ZmY0OGQxMDc1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICA2MixcbiAgICAgIDI0NyxcbiAgICAgIDE3NCxcbiAgICAgIDE2MCxcbiAgICAgIDk5LFxuICAgICAgMjI5LFxuICAgICAgMjUyLFxuICAgICAgMjgsXG4gICAgICAxMDQsXG4gICAgICAxNTIsXG4gICAgICAxNTksXG4gICAgICAxMDEsXG4gICAgICAxMSxcbiAgICAgIDIyMixcbiAgICAgIDIsXG4gICAgICA5MixcbiAgICAgIDExOSxcbiAgICAgIDU2LFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAyNDQsXG4gICAgICAyNDgsXG4gICAgICA5MCxcbiAgICAgIDIxOCxcbiAgICAgIDkzLFxuICAgICAgMjI1LFxuICAgICAgMTYwLFxuICAgICAgNjQsXG4gICAgICA5OCxcbiAgICAgIDIwNSxcbiAgICAgIDk5LFxuICAgICAgNTAsXG4gICAgICAxODYsXG4gICAgICAyMzksXG4gICAgICA0NixcbiAgICAgIDE3NSxcbiAgICAgIDgxLFxuICAgICAgMTc3LFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhLN0UyRFRHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTYzMTc2ODA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCK8J2Qi/CdmqvwnZCU8J2QkiDwnZqz8J2asPCdkIrwnZqr8J2atfCdkIvwnZCS8J2ar/CdmrQg8J2Qi/CdmrXwnZqv8J2atPCdmrDwnZCD8J2aq/CdkJJcIixcbiAgICBcImxpZFwiOiBcIjIyNDU1NDIyODE3NTA2MzoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZTJuZmtFRUtyTWhMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9FTzFxQzlhUmQvTHVhMjkxS0RVWW9lT2Z4WkdLbkg1UGlOb0xhYVA2aFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZm9DTVZGMUhIUVJhK2RHR1BHRDFLaHI2RWU1K3dZaHJxVGtweW9JaVZsUHMraWpnYmIrakFuMzdKU3FQZHZmditLQk8yVUorVUNUNEhLay9XYTZaQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSEdoeExsU09yUUR2eDJSQk1GYitsclF0d3hGTU1RQmthMFFnSGZ3SXh2elZnTWhxTkdHTGN6NExkWng3SXF0T3Jub0ZjeDlmMXdtN25QV2I3SnFJQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjU2MzE3NjgwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODM3MTAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
