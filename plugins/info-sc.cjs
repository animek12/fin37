var handler = async(m, { conn, text, usedPrefix, command }) => {

var str = `wa.me/6282261065144`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']
    
module.exports = handler
