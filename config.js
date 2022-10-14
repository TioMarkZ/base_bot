/* 
Essa versão de software grátis.
*
Caso divulgue algum comando deixe os créditos, fazer ele foi desgaste. 
*
Agradeço pela compreensão. 

📝 NOTAS:
  * Nenhum comando ainda adicionado
  * Apenas o basico do basico
*/
const fs = require('fs')


// Other
global.owner = ['55xxxxxxxxxx','559491423691']
global.sessionName = 'bahiaSE'
global.prefa = ['/']
global.sp = '⭔'
global.mess = {
    success: '✓ 𝙎𝙪𝙘𝙚𝙨𝙨𝙤',
    admin: '❲❓❳ - 𝙍𝙚𝙘𝙪𝙧𝙨𝙤𝙨 𝙚𝙨𝙥𝙚𝙘𝙞𝙖𝙞𝙨 𝙙𝙤 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤!',
    botAdmin: '❲👮🏻‍♂️❳ - 𝘽𝙤𝙩 𝙙𝙚𝙫𝙚 𝙨𝙚𝙧 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧 𝙥𝙧𝙞𝙢𝙚𝙞𝙧𝙤!',
    owner: '❲👨🏻‍💻❳ - 𝙍𝙚𝙘𝙪𝙧𝙨𝙤𝙨 𝙚𝙨𝙥𝙚𝙘𝙞𝙖𝙞𝙨 𝙙𝙤 𝙥𝙧𝙤𝙥𝙧𝙞𝙚𝙩𝙖́𝙧𝙞𝙤 𝙙𝙤 𝙗𝙤𝙩',
    group: '❲👥❳ - 𝙍𝙚𝙘𝙪𝙧𝙨𝙤 𝙪𝙨𝙖𝙙𝙤 𝙖𝙥𝙚𝙣𝙖𝙨 𝙥𝙖𝙧𝙖 𝙜𝙧𝙪𝙥𝙤𝙨!',
    private: '❲👤❳ - 𝙍𝙚𝙘𝙪𝙧𝙨𝙤𝙨 𝙪𝙨𝙖𝙙𝙤𝙨 ​​𝙖𝙥𝙚𝙣𝙖𝙨 𝙥𝙖𝙧𝙖 𝙗𝙖𝙩𝙚-𝙥𝙖𝙥𝙤 𝙥𝙧𝙞𝙫𝙖𝙙𝙤!',
    bot: '❲🤖❳ - 𝙍𝙚𝙘𝙪𝙧𝙨𝙤𝙨 𝙚𝙨𝙥𝙚𝙘𝙞𝙖𝙞𝙨 𝙙𝙤 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤 𝙙𝙤 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙤 𝙗𝙤𝙩',
    wait: '❲⏳❳ - 𝘼𝙜𝙪𝙖𝙧𝙙𝙚...'
}
global.thumb = fs.readFileSync('./lib/bat.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
