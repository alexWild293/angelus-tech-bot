let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {

    

}
handler.help = ['gitclone <url>']
handler.tags = ['download']
handler.command = /gitclone/i

handler.limit = true

module.exports = handler
