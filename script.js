
let key = "281626d8e54ebe191038a63b9e649595"


function colocarDadosNaTela(dados){
console.log(dados)
document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
    
}

function CliqueNoBotao(){
    const cidade = document.querySelector(".input").value 

   buscarCidade(cidade)
}

