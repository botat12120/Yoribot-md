const dir = [
'https://i.imgur.com/xtchuO6.jpeg',
'https://i.imgur.com/uLwtJ9Q.jpeg',
'https://i.imgur.com/46toInH.jpeg',
'https://i.imgur.com/TlDhgV6.jpeg',
'https://i.imgur.com/ytWLPnj.jpeg',
'https://i.imgur.com/r3x1VTo.jpeg',
'https://i.imgur.com/A0gjqai.jpeg',
'https://i.imgur.com/bbqbJfR.jpeg',
'https://i.imgur.com/g7Sk6a1.jpeg',
'https://i.imgur.com/66uBXX2.jpeg',
'https://i.imgur.com/ERpdm9w.jpeg',
'https://i.imgur.com/MWW18So.jpeg',
'https://i.imgur.com/EyuUrrk.jpeg',
'https://i.imgur.com/4XzP6gx.jpeg',
'https://i.imgur.com/t6t8BZl.jpeg',
'https://i.imgur.com/CAck3f7.jpeg',
'https://i.imgur.com/0PTN81v.jpeg',
'https://i.imgur.com/8voC0Ap.jpeg',
'https://i.imgur.com/x6U6Afn.jpeg',
'https://i.imgur.com/S4bdk3X.jpeg',
'https://i.imgur.com/DMb2uqR.jpeg',
'https://i.imgur.com/gR7kFMz.jpeg',
'https://i.imgur.com/DlUggl3.jpeg',
'https://i.imgur.com/GN3uuR7.jpeg',
'https://i.imgur.com/YnaOWi7.jpeg',
'https://i.imgur.com/gYYagRg.jpeg',
'https://i.imgur.com/ckD32Hv.jpeg',
'https://i.imgur.com/GTUbYzz.jpeg',
'https://i.imgur.com/9FHRKKE.jpeg',
'https://i.imgur.com/yzLyu7D.jpeg',
'https://i.imgur.com/R0iw0Zp.jpeg',
'https://i.imgur.com/ZlSygwW.jpeg',
'https://i.imgur.com/Wy7wrK6.jpeg',
'https://i.imgur.com/hshVykq.jpeg',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendFile(m.chat, dir, 'error.jpg', `*شيتوجي 😽*`, m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['زوجني'] 
handler.limite = true 
export default handler
