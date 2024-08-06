let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*ما الذي تراه ممتعا؟.....ما الذي تراه مسليا؟*`;
    await conn.sendMessage(m.chat, {
   react: {
 text: "☠️",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/1884a61fac00a93cd6880.mp4', 'video.mp4' , message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
