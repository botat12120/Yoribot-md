let handler = async (m, { command, text }) => m.reply(`*اهلا بك في مملڪہ ࢪيڪال 🍃ღ*

*❉ • • • ━━━ ⌝『⚡』⌞ ━━━ • • • ❉*

*املئ الاستمـ📜ـارة :*
*⤾*
*♧┊لقبك【】*
*♧┊من اي انمي لقبك 【】*
*♧┊من طرف مين 【】*
*♧┊ولد ولا بنت 【】*

*❉ • • • ━━━ ⌝『⚡』⌞ ━━━ • • • ❉*
*ملاحظهہ‼️⤿*
*⤾*
*يجب أن ترفق صورة مع لقبك ⤣🔗⤤*

~*⧉ممنوع توخذ لقب بنت والعكس 🚫*~

*𝐑𝐄𝐊𝐀𝐋 𝐊𝐈𝐍𝐆𝐃𝐎𝐌 🐉*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(وانو|wano)$/i

export default handler
