let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '🙌 *Invocando al grupo:* 🙌\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['tagall']

handler.admin = true
handler.group = true

module.exports = handler
