const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: 'https://danzzapi.xyz',
	dryan: 'https://api-dryan.my.id',
}

global.APIKeys = {
	'https://danzzapi.xyz': 'danzz',
	'https://api-dryan.my.id': 'dryanbot'
}

// Other
global.apikey = ['danzz'] 
global.apikeyprem = ['danzzprem'] 
global.apikeyvip = ['YOUR APIKEY'] 
global.namabot = ['DryanBOT']
global.namaowner = ['Dryan-MD']
global.owner = ['6289513081052']
global.premium = ['6289513081052']
global.packname = 'Β© Powered By'
global.author = 'https://api-dryan.my.id'
global.sessionName = 'session'
global.prefa = ['','!','.','π¦','π€','πΏ']
global.prefix = ['']
global.symbol1 = 'βοΈ'
global.symbol2 = 'π£'
global.wm = 'Β© π³ππ’ππ-πΌπ³'
global.mess = {
    success: 'Success β',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
global.thumb = fs.readFileSync('./dryan.jpg')
global.qris = { url: 'https://telegra.ph/file/2044ef0c8dfe4a54d1314.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
