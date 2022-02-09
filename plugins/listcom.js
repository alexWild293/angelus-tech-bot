let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
    let coomands = "Lista de comandos disponibles\n\n*Comando:* #play nombre_cancion\n*Desc:* Descargar cualquier canción\n\n*Comando:* #listcom\n*Desc:* Ver lista de comandos disponibles.";
    m.reply(coomands);
}

handler.command = ['listcom']
handler.group = true

module.exports = handler
  