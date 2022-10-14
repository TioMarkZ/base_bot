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

//api do whatsapp e outras conexões

require('./config')

const { color, bgcolor } = require('./lib/color')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const { exec, spawn, execSync } = require("child_process")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const moment = require('moment-timezone')
const time = moment().tz('America/Sao_Paulo').format("HH:mm:ss")


module.exports = bat = async (bat, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = global.prefa;
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bat.decodeJid(bat.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await bat.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const batdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        

	 //----------------------------- MENSAGENS PARA USAR EX mess.only.admins ------------------------------------\\
    

        

        // PUXANDO AS MENSAGENS PARA O CONSOLE
        if (!m.isGroup && isCmd && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'purple')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
        if (!m.isGroup && !isCmd && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
        if (m.isGroup && m.isGroup && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'gold')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
        if (!m.isGroup && m.isGroup && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'gold')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)        


        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: bat.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, bat.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        bat.ev.emit('messages.upsert', msg)
        }

        if (budy.startsWith("1") || budy.startsWith("1️⃣") || budy.startsWith("faq")) {
            if (!m.key.fromMe && !isCmd){
            if (m.isGroup) return
            
            bat.sendMessage(m.chat, {text: 'agora vou te mandar uma lista de perguntas frequentes:'})
            await sleep(500)
            const sections = [
                {
                title: "Todas as duvidas:",
                rows: [
                    {title: `como funciona?`, rowId: `${prefix}menu 1`, description: "bla bla"},
                    {title: `como funciona?`, rowId: `${prefix}menu 1`, description: "bla bla"},
                    {title: `como funciona?`, rowId: `${prefix}menu 1`, description: "bla bla"},
                    {title: `como funciona?`, rowId: `${prefix}menu 1`, description: "bla bla"},
                ]
                }, 
                {
                    title: "Infos & Suporte:",
                    rows: [
                        {title: `Códer 🦉`, rowId: `${prefix}criador`},
                        {title: `⚡ Notas e atualizações ✨️`, rowId: `${prefix}atualizacoes`},
                    ]
                    },
            ]
            
            const listMessage = {
              text: "❓ DUVIDAS FREQUENTES",
              footer: null,
              title: null,
              buttonText: "Selecione aqui 🔱",
              sections
            }
             await bat.sendMessage(m.chat, listMessage)}
            }

            if (budy.startsWith("2") || budy.startsWith("2️⃣") || budy.startsWith("chamarsup")) {
                if (!m.key.fromMe && !isCmd){
                if (m.isGroup) return
                
                bat.sendMessage(m.chat, {text: 'já avisei meu suporte, em alguns minutos ele irá te responder\n\nenquanto isso veja as duvidas frequentes no "faq", vai que a sua está lá 🤖.'})
               
                }
                }
    

            if (budy.toLowerCase().includes("oi bot") || budy.toLowerCase().includes("start")) {
                if (!m.key.fromMe && !isCmd){
                if (m.isGroup) return
                let buttonse = [
                    {buttonId: `faq`, buttonText: {displayText: '❓ Ver meu FAQ'}, type: 1},
                    {buttonId: `chamarsup`, buttonText: {displayText: '⚠ Falar com o suporte'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `Olá seja bem vindo(a)`,
                    footer: 'escolha uma opção abaixo.\n\nou digite:\nfaq\n---\nchamarsup',
                    buttons: buttonse,
                    headerType: 2
                }
                bat.sendMessage(m.chat, buttonMessagee)
                await sleep(500)
                bat.sendMessage(m.chat, {text: 'Ou digite uma das opções:\n\n1️⃣ - ver meu FAQ e tirar duvidas agora mesmo.\n2️⃣ - falar com o suporte'})
                }
                }
        switch(command) {




//-------------------- FIM DAS CASES -----------------------\\
    case 'start': case 'menu': case 'iniciar': case 'help':
	m.reply('acabei de ser criado 🤖')
break
            default:
                
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			

		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
