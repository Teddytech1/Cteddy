const { zokou } = require("../framework/zokou");
const os = require("os");
const { format } = require("util");

zokou({
  nomCom: "details",
  reaction: "ℹ️",
  categorie: "General"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  try {
    // 1. Mahesabu ya muda wa bot tangu iwake (Uptime)
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    // 2. Taarifa za Server
    const ramTotal = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const ramFree = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    const platform = os.platform();
    const cpuModel = os.cpus()[0].model;

    // 3. Ujumbe wa Details
    const message = `
🌟 *TEDDY-XMD AI DETAILS* 🌟

👤 *Developer:* Teddytech1 
🔗 *GitHub:* https://github.com/Teddytech1/TEDDY-XMD
🤖 *Model:* Zokou / Base64 Framework
⏳ *Uptime:* ${hours}h ${minutes}m ${seconds}s

--- 💻 *SERVER INFO* ---
📌 *Platform:* ${platform}
🧠 *RAM:* ${ramTotal} GB
📉 *Free RAM:* ${ramFree} GB
⚙️ *Processor:* ${cpuModel}

--- 🛠️ *CAPABILITIES* ---
✅ AI Voice/Text Chat
✅ Media Downloader (TikTok, FB, IG)
✅ Contact Scraper (Getall)
✅ Status/Media Saver

> *Powered by Teddytech1*
`.trim();

    // 4. Tuma ujumbe ukiwa na picha/metadata
    await zk.sendMessage(dest, {
      text: message,
      contextInfo: {
        externalAdReply: {
          title: "BOT SYSTEM DETAILS",
          body: "Click to visit Developer's GitHub",
          thumbnailUrl: "https://telegra.ph/file/0c3260c6d96200234a946.jpg", 
          sourceUrl: "https://github.com/Teddytech1/TEDDY-XMD",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: ms });

  } catch (e) {
    repondre(`❌ Error: ${e.message}`);
  }
});
