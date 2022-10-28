var handler = async m => m.reply(`
╭─「 Donasi 」
│ • PAYPAL [https://www.paypal.me/AlvinMu]
│ • DANA [081332995497]
│ • GOPAY [081332995497]
│ • PULSA [081944435802]
│ • PULSA2 [081332995497]
│ • Saweria [https://saweria.co/Rimuru233]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282261065144
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
