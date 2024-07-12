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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_07_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICA1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYwLFxuICAgICAgICA5MixcbiAgICAgICAgMjA0LFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM4LFxuICAgICAgICA3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVta2dDdzRCYmNLRjArWFJYVWRFTVVib0dpOW1YWnI0RWtoS2VEL0dUcEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdibGY4bkJwU1VHUVlnTmt1UnFMaXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzA3YTFjOTUtYjg4OS00Yjg1LTg2YzUtZWQwNjVmY2MxZjliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDExNSxcbiAgICAgIDEzMixcbiAgICAgIDE2NixcbiAgICAgIDEyLFxuICAgICAgODQsXG4gICAgICA1NCxcbiAgICAgIDIzNSxcbiAgICAgIDEyMyxcbiAgICAgIDIxMyxcbiAgICAgIDQ0LFxuICAgICAgMjQ4LFxuICAgICAgMTY4LFxuICAgICAgMzEsXG4gICAgICAyMDgsXG4gICAgICAxMDUsXG4gICAgICA4MyxcbiAgICAgIDI5LFxuICAgICAgMjU1LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMTYsXG4gICAgICA4OSxcbiAgICAgIDE4NixcbiAgICAgIDIyLFxuICAgICAgNyxcbiAgICAgIDI1NCxcbiAgICAgIDIzNCxcbiAgICAgIDEwMixcbiAgICAgIDg1LFxuICAgICAgMzUsXG4gICAgICAxNTYsXG4gICAgICAxMTksXG4gICAgICA1NCxcbiAgICAgIDIyMyxcbiAgICAgIDE2NixcbiAgICAgIDExMCxcbiAgICAgIDE1OCxcbiAgICAgIDE2OCxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFFM1lERVhGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTYzMTc2ODA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI0NTU0MjI4MTc1MDYzOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkx5NWNRRkVQQ1p4clFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOTVJxLzBEZDd4eWg2NUdzVysySmlDZjZoVVFHSXhXRUVBeTBRNGhObUdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkUrdmlZRjd1Y0JFcm9vM1BoczBIaWtIMmlHYXAwaGphTFJZaUljTXBoNEhDaEtXTXJ1bllsVkJVT2hqMkRMcHVqWXkwYUQyaTFTZUltdGt1KzkwS0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNlNGZhNUJiNTZsNlpBeExjVCtmb0ltcGR4RXB0Uk5oemwwZ3JwZGhIMy9UV0w2WU50c1pmZ05oeFNLM05FTXYxMFc0MmE0U3dVWUswcHRhOG5DUmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1NjMxNzY4MDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgxNDg0NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
