let timeout = 60000
let poin = 2000
let poin_lose = 500
let handler = async (m, {
	conn,
	usedPrefix
}) => {
	conn.suit = conn.suit ? conn.suit : {}
	if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Selesaikan suit mu yang sebelumnya'
	if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya.. Contoh\n\n${usedPrefix}suit @${nomorown}`, m.chat, {
		mentions: conn.parseMention('@' + nomorown)
	})
	if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
	let id = 'suit_' + new Date() * 1
	let caption = `
_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} 
`.trim()
	let footer = `Ketik "terima/ok/gas" untuk memulai suit\nKetik "tolak/gabisa/nanti" untuk menolak`
	conn.suit[id] = {
		chat: await conn.sendButton(m.chat, caption, footer, null, [
			['Terima', 'ok'],
			['Tolak', 'tolak']
		], m, {
			mentions: conn.parseMention(caption)
		}),
		id: id,
		p: m.sender,
		p2: m.mentionedJid[0],
		status: 'wait',
		waktu: setTimeout(() => {
			if (conn.suit[id]) conn.reply(m.chat, `_Waktu suit habis_`, m)
			delete conn.suit[id]
		}, timeout),
		poin,
		poin_lose,
		timeout
	}
}
handler.tags = ['game']
handler.help = ['suitpvp', 'suit2'].map(v => v + ' @tag')
handler.command = /^suit(pvp|2)$/i
handler.group = true

module.exports = handler
