var ss = config.tempo
var acertos = 0
var erros = 0
var intervalo

var nope = new Audio("songs/Nope.mp3")
var hit = new Audio("songs/hit.mp3")
var beep = new Audio("songs/beep.mp3")

function mudarPosicao(circuloId, x, y) {

    switch (oqueRenderizar){
        case "start":

            /*oqueRenderizar = "alvos"
            intervalo = setInterval(() => { timer(); }, 1000)
            textos.pontos = "00"
            textos.porcentagem = "000"
            textos.tempo = config.tempo*/

            break
        case "alvos":

            if(circuloId != null){
                hit.play()
                alvos[circuloId].x = (Math.floor(Math.random() * (570 - 30 + 1)) + 30)
                alvos[circuloId].y = (Math.floor(Math.random() * (570 - 60 + 1)) + 60)
                acertos++
                pontoErro.x = 604
                pontoErro.y = 604
            }else{
                nope.play()
                erros++
                pontoErro.x = x
                pontoErro.y = y
            }
            textos.pontos = `${(acertos * 50) - (erros * 10)}`
            textos.porcentagem = `${Math.trunc((acertos / (acertos + erros)) * 100)}`

            break
        case "end":

            oqueRenderizar = "start"
            textos.pontos = "00"
            textos.porcentagem = "000"
            textos.tempo = config.tempo
            ss = config.tempo
            acertos = 0
            erros = 0
    }
}

function timer() {
    ss--; 
    if(ss < 6){
        beep.play()
    }
    if(ss == 0){
        clearInterval(intervalo)
        oqueRenderizar = "end"
    }
    atualizarInformacao()
}

function atualizarInformacao(){
    textos.tempo = (ss < 10 ? '0' + ss : ss)
}
