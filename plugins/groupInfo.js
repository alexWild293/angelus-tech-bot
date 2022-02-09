let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*「 Información del grupo 」*\n
*ID:* 
${groupMetadata.id}

🔥 *Nombre:* 
${groupMetadata.subject}

👀 *Descripción:* 
${groupMetadata.desc}

👥 *Total Usuarios:*
${participants.length} Members

😎 *Jefe del Grupo:* 
@${m.chat.split`-`[0]}

🕵️‍♂️ *Admins:*
${listAdmin}

⚙ *Cofiguración del grupo:*
${isBanned ? '✅' : '❌'} Banned
${welcome ? '✅' : '❌'} Welcome
${detect ? '✅' : '❌'} Detect
${global.db.data.chats[m.chat].delete ? '❌' : '✅'} Anti Delete
${antiLink ? '✅' : '❌'} Anti Link

⚙ *Configuración de Mensajes:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

module.exports = handler