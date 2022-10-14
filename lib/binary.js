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

async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }