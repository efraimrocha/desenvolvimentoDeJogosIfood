
const fs = require('fs')

// Uso 
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')



const promiseLerArquivo = fs.promises.readFile(filePath)
/**
promiseLerArquivo.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
}).catch((error) =>{
    console.log('Erro encontrado', error)
})
 */

// Encadeando funções e manipulando resultados

promiseLerArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) =>linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Erro encontrado', error))