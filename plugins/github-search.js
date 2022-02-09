

handler.help = ['githubsearch'].map(v => v + ' <pencarian>')
handler.tags = ['tools']

handler.command = /^g(ithub|h)search$/i

module.exports = handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  }