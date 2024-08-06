let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*مــرحــبًــا〘 ${taguser} 〙 انـا يوريتشي*\n *• هــل تـحـتـاج الـى مـسـاعـدة؟ ، اكـتـب﹙.اوامــر ╎♡╎ .قــائـمــة﹚*\n\n\n> *🚫╎من فضلك يمنع استخدام البوت في الخاص!*`;
    await conn.sendMessage(m.chat, {
   react: {
 text: "😈",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/c3b319c4e9fa528251b92.jpg', 'video.mp4' , message, m);
};
handler.help = ['bot'];
handler.tag = ['dado'];
handler.command = ['bot', 'بوت'];

export default handler;
