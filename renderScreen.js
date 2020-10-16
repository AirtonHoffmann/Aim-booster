const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

var oqueRenderizar = "start"

var config = {
    alvoCor01: "#4F4F4F",
    alvoCor02: "white",
    fundoCor01: "#87CEEB",
    fundoCor02: "white",
    pontoCor: "black",
    fonteCor: "black",
    numeroAlvos: 3,
    alvosRaio: 30,
    tempo: 30,
    audio: true
}

var alvos = {}

for(let i = 0; i < config.numeroAlvos; i++){
    alvos[`0${i}`] = {
        x: (Math.floor(Math.random() * (570 - 30 + 1)) + 30),
        y: (Math.floor(Math.random() * (570 - 60 + 1)) + 60),
        inicio: 0,
        fim: (2 * Math.PI) 
    }
}

var pontoErro = {
    x: -3, 
    y: -3, 
    raio: 3, 
    inicio: 0, 
    fim: (2 * Math.PI)
}

var textos = {
    pontos: "00",
    tempo: config.tempo,
    porcentagem: "000"
}

function renderDisplay() {
    context.beginPath()
    context.fillStyle = config.fonteCor
    context.font = '15px monospace';
    context.fillText("score", 10, 15);
    context.font = '30px monospace';
    context.fillText(textos.pontos, 10, 40);

    context.font = '15px monospace';
    context.fillText("time", 280, 15);
    context.font = '40px monospace';
    context.fillText(textos.tempo, 275, 47.5);

    context.font = '15px monospace';
    context.fillText("accuracy", 525, 15);
    context.font = '20px monospace';
    context.fillText("%", 525, 40);
    context.font = '30px monospace';
    context.fillText(textos.porcentagem, 540, 40);
}

renderScreen()

function renderScreen() {
    context.clearRect(0, 0, 600, 600)

    var grd = context.createLinearGradient(0, 600, 0, -30);
    grd.addColorStop(0.85, config.fundoCor01);
    grd.addColorStop(1, config.fundoCor02);
    context.fillStyle = grd;
    context.fillRect(0, 0, 600, 600);

    switch (oqueRenderizar){
        case "start":

            for(let circuloId in alvos){
                let circulo = alvos[circuloId]
                context.beginPath()
                grd = context.createRadialGradient(circulo.x, circulo.y, 30, (circulo.x), (circulo.y - 75), 40)
                grd.addColorStop(0, config.alvoCor01)
                grd.addColorStop(1, config.alvoCor02)
                context.fillStyle = grd
                context.arc(circulo.x, circulo.y, config.alvosRaio, circulo.inicio, circulo.fim);
                context.fill();
            }

            context.beginPath()
            context.fillStyle = config.pontoCor
            context.arc(300, 75, pontoErro.raio, pontoErro.inicio, pontoErro.fim);
            context.fill();
            
            context.beginPath()
            context.fillStyle = config.fonteCor
            context.font = '90px Arial';
            context.fillText("Click to start", 50, 320);
            renderDisplay()

            break
        case "alvos":

            for(let circuloId in alvos){
                let circulo = alvos[circuloId]
                context.beginPath()
                grd = context.createRadialGradient(circulo.x, circulo.y, 30, (circulo.x), (circulo.y - 75), 40)
                grd.addColorStop(0, config.alvoCor01)
                grd.addColorStop(1, config.alvoCor02)
                context.fillStyle = grd
                context.arc(circulo.x, circulo.y, config.alvosRaio, circulo.inicio, circulo.fim);
                context.fill();
            }

            context.beginPath()
            context.fillStyle = config.pontoCor
            context.arc(pontoErro.x, pontoErro.y, pontoErro.raio, pontoErro.inicio, pontoErro.fim);
            context.fill();

            renderDisplay()

            break
        case "end":

            context.beginPath()
            context.fillStyle = config.fonteCor
            context.font = '90px Arial';
            context.fillText("End", 50, 320);
    }

    requestAnimationFrame(renderScreen)
}