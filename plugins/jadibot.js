let { MessageType } = require('@adiwajshing/baileys')
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []


handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^jadibot$/i

handler.limit = true

module.exports = handler
