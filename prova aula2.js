const idade = Number(prompt("digite sua idade"))
const status_de_registro = Number(prompt("voce ja é registrado? digite 1 para SIM ou 2 para NÃO"))

if (idade>=18){
    alert("voce é maior de idade!")
} else {
    alert("voce é menor de idade!")
}

if (status_de_registro===1){
    alert("Voce está registrado, seja bem vindo!")
} else if (status_de_registro===2){
    alert("voce nao está registrado, complete seu cadastro!")
} else {
    alert("Status desconhecido")
}

if (idade>=18 && status_de_registro===1) {
    alert("acesso completo!")
} else if (idade<18 || status_de_registro===2){
    alert("acesso limitado")
}