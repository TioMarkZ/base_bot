/*⚠️⚠️ ATENÇÃO ⚠️⚠️
Essa versão de software é paga. Peço que não divulgue ela
*
Caso divulgue algum comando deixe os créditos, fazer ele foi desgaste. 
*
Agradeço pela compreensão. 

📝 NOTAS:
  * Algumas cases criada por Dark 
  * Total agradecimento e créditos a ele <3
*/

const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}