
addEventListener('click', pegarElement, false)

function pegarElement() {
    let elemLeft = canvas.offsetLeft + canvas.clientLeft
    let elemTop = canvas.offsetTop + canvas.clientTop
    
    let circuloIdReturn = null

    let x = event.pageX - elemLeft
    let y = event.pageY - elemTop

    for(let circuloId in alvos){
        let circulo = alvos[circuloId]

        if(Math.sqrt(Math.pow((circulo.x - x), 2) + Math.pow((circulo.y - y), 2)) <= 32){
            circuloIdReturn = `${circuloId}`
            break
        }
    }

    console.log(`${circuloIdReturn}`)
    mudarPosicao(circuloIdReturn, x, y)
}