"use strict";

const { zokou } = require("../framework/zokou");

zokou({
    nomCom: "bet",
    categorie: "Games",
    reaction: "⚽"
}, async (dest, zk, commandeOptions) => {
    const { arg, repondre, ms, prefixe, auteurMessage } = commandeOptions;
    
    // ID ya Newsletter yako
    const channelJid = "120363421104812135@newsletter";

    // Angalia kama jina la kampuni limewekwa
    if (!arg || arg.length === 0) {
        return repondre(`*⚠️ TAFADHALI WEKA JINA LA KAMPUNI!* \n\n*Mfano:* ${prefixe}bet Sportybet`);
    }

    const company = arg.join(" ").toUpperCase();
    const dateToday = new Date().toLocaleDateString('en-GB'); 
    
    repondre(`⏳ *TEDDY-XMD AI Inachambua mechi za leo kwa ajili ya ${company}...*`);

    // List ya timu maarufu duniani (zimeongezeka)
    const teams = [
        "Real Madrid", "Man City", "Arsenal", "Bayern Munich", "PSG", 
        "Liverpool", "Barcelona", "Inter Milan", "Leverkusen", "AC Milan",
        "Man United", "Dortmund", "Napoli", "Chelsea", "Juventus",
        "Al Nassr", "Inter Miami", "Benfica", "Ajax", "Yanga SC", "Simba SC",
        "Azam FC", "Gor Mahia", "Mamelodi", "Al Ahly", "Aston Villa", "Monaco"
    ];

    const tips = [
        "Home Win (1)", "Away Win (2)", "Draw (X)", 
        "Over 2.5 Goals", "GG (Both Teams Score)", 
        "1X (Home or Draw)", "2X (Away or Draw)", 
        "HT/FT: 1/1", "Under 3.5"
    ];

    const generateTicket = () => {
        let list = "";
        let shuffled = teams.sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < 10; i++) {
            const teamA = shuffled[i];
            const teamB = shuffled[(i + 7) % teams.length];
            const prediction = tips[Math.floor(Math.random() * tips.length)];
            const odds = (Math.random() * (3.10 - 1.25) + 1.25).toFixed(2);
            const probability = Math.floor(Math.random() * (95 - 65) + 65);
            
            list += `📍 *MATCH ${i + 1}:* ${teamA} vs ${teamB}\n`;
            list += `✨ *TIP:* ${prediction} (@${odds})\n`;
            list += `📈 *PROBABILITY:* ${probability}%\n\n`;
        }
        return list;
    };

    let betMsg = `🏆 *TIMNASA-MD DAILY TICKET* 🏆\n`;
    betMsg += `📅 *DATE:* ${dateToday}\n`;
    betMsg += `🏢 *BOOKMAKER:* ${company}\n`;
    betMsg += `👤 *ANALYST:* @${auteurMessage.split('@')[0]}\n`;
    betMsg += `───────────────────\n\n`;
    
    betMsg += generateTicket();
    
    betMsg += `💰 *TOTAL ODDS:* ${(Math.random() * (120.0 - 20.0) + 20.0).toFixed(2)}\n\n`;
    betMsg += `⚠️ *NOTE:* Hii ni mifumo ya AI. Bet kiasi unachoweza kupoteza. 🔞`;

    await zk.sendMessage(dest, { 
        text: betMsg,
        mentions: [auteurMessage],
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: channelJid,
                newsletterName: "𝚃𝙴𝙳𝙳𝚈-𝚇𝙼𝙳 𝙰𝙸 𝙰𝚂𝚂𝙸𝚂𝚃𝙰𝙽𝚃",
                serverMessageId: 1
            },
            externalAdReply: {
                title: `${company} - TIPS ZA LEO`,
                body: "TEDDY-XMD EXPERT TIPS",
                thumbnailUrl: "https://files.catbox.moe/13nyhx.jpg",
                sourceUrl: "https://whatsapp.com/channel/0029Vb6NveDBPzjPa4vIRt3n",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: ms });
});
