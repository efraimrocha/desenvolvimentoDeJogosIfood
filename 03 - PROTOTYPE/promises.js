// O assincronismo de forma resumida é quando temos uma tarefa que não nos pertence e que em algum momenteserá retornada.

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    // ... 
    setTimeout(() => {
        const numero = parseInt(Math.random()*100)
        resolve(numero)    
    }, 1000);
    
    // ...
    //esolve()//Se der certo... resolve()
    // ...
    //reject()// Se der errado... reject()
})

console.log('Vai JS!')

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
        return value + 10
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(()=>{
        console.log('Finalizou')
    })


