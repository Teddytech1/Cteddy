"use strict";

const { zokou } = require("../framework/zokou");

zokou({
    nomCom: "test",
    categorie: "General",
    reaction: "🚀"
}, async (dest, zk, commandeOptions) => {
    const { ms, repondre } = commandeOptions;
    const channelJid = "120363421104812135@newsletter";
    const audioUrl = "https://files.catbox.moe/lqx6sp.mp3";
    
    // Media Links
    const imageUrl1 = "https://files.catbox.moe/13nyhx.jpg"; 
    const imageUrl2 = "https://files.catbox.moe/9yy6iy.jpg"; 

    try {
        const testMsg = `*𝚃𝙴𝙳𝙳𝚈-𝚇𝙼𝙳 𝚂𝚈𝚂𝚃𝙴𝙼 𝙲𝙷𝙴𝙲𝙺* ⚡\n\n` +
            `*Status:* 𝙾𝙽𝙻𝙸𝙽𝙴\n` +
            `*Engine:* 𝚃𝙴𝙳𝙳𝚈-𝚇𝙼𝙳\n` +
            `*Owner:* 𝚃𝙴𝙳𝙳𝚈\n` +
            `*Timestamp:* ${new Date().toLocaleString()}\n\n` +
            `_System is running smoothly with media support._`;

        // 1. Send First Image with Caption
        await zk.sendMessage(dest, {
            image: { url: imageUrl1 },
            caption: testMsg,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: channelJid,
                    newsletterName: "𝚃𝙴𝙳𝙳𝚈-𝚇𝙼𝙳",
                    serverMessageId: 1
                }
            }
        }, { quoted: ms });

        // 2. Send Second Image
        await zk.sendMessage(dest, {
            image: { url: imageUrl2 },
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: channelJid,
                    newsletterName: "𝚃𝙴𝙳𝙳𝚈-𝚇𝙼𝙳"
                }
            }
        }, { quoted: ms });

        // 3. Send Audio (FIXED: Added the missing closing quote for mimetype)
        await zk.sendMessage(dest, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: channelJid,
                    newsletterName: "𝚃𝙴𝙳𝙳𝚈-𝚇𝙼𝙳 𝙰𝚄𝙳𝙸𝙾"
                }
            }
        }, { quoted: ms });

    } catch (error) {
        console.error("Test Command Error:", error);
        repondre("❌ Error: " + error.message);
    }
});
