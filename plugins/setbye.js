let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Despedida establecida con éxito\n@user (Usuario)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

