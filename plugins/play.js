let yts = require('yt-search')
const fs = require('fs')
const ytdownmp3 = require('youtube-mp3-converter');

let handler = async (m, { conn, command, text, isPrems, isOwner }) => {

  if (!text) throw 'Hola 😎, para buscar una canción escribe, *#play* nombre_cancion'
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '*Error al buscar la canción, por favor vuelve a intentarlo.*'

  var msgEnviar = `🔥 *Título:* 🔥 ${vid.title}
  🔗 *URL:* 🔗 ${vid.url}`.trim();

  m.reply(msgEnviar);

  let rutaCancion = "tmp/" + vid.title + ".mp3";
  if (fs.existsSync(rutaCancion)) {
    conn.logger.info("*La cacion ya existe, enviando*");
    conn.sendFile(m.chat, rutaCancion, vid.title + ".mp3");
    return
  }

  const convertLinkMp3 = ytdownmp3("tmp/");
  conn.logger.info("Iniciando descarga de cancion");
  const resultMp3 = await convertLinkMp3(vid.url, {title: vid.title});

  if(resultMp3){
      conn.logger.info("Cancion descargada");
      conn.sendFile(m.chat, rutaCancion, vid.title + ".mp3");
  } else {
    conn.logger.error("❌ Error descargando cancion.");
  }

}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true

module.exports = handler

