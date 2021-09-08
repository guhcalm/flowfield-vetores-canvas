function desenharParticulas( ctx, coordenadas, vetores, particulas ) {
    //console.log( 'As particulas estão sendo desenhadas...' )

    let c = ctx
    let tela = coordenadas.tela
    let intervalo = coordenadas.malha.intervalo    

    particulas.map(element => {
        element.life -= .5
        element.pos = mover( c, element, vetores, intervalo, tela )
        desenhar( c, element )
    });

    //console.log( '... As particulas foram desenhadas.' )
}

function mover( c, particula, vetores, intervalo, tela ) {
    let pos = { x: particula.pos.x, y: particula.pos.y }
    let cv = { x: Math.round( pos.x / intervalo.x ), y: Math.round( pos.y / intervalo.y ) }  // cv = coletar vetor mais proximo da posição
    let vel = { x: vetores[cv.x][cv.y].dx, y: vetores[cv.x][cv.y].dy }
    pos.x += vel.x * .2
    pos.y += vel.y * .2

    if ( pos.x <= 0 || pos.x >= tela.x ) {
        pos.x = Math.random() * tela.x
    }
    if ( pos.y <= 0 || pos.y >= tela.y ) {
        pos.y = Math.random() * tela.y
    }
    if ( particula.life <= 0 ) {
        pos.x = Math.random() * tela.x
        pos.y = Math.random() * tela.y
        particula.life= (20 * Math.random() + 5)
    }

    c.beginPath()
    c.strokeStyle = `rgba( 255, 255, 255, 1)`
    c.moveTo(pos.x, pos.y)
    c.lineTo(
        pos.x + vetores[cv.x][cv.y].dx , 
        pos.y + vetores[cv.x][cv.y].dy 
    ) /*
    c.lineWidth = 3
    c.stroke()
    c.beginPath()
    c.fillStyle = `white`
    c.arc( pos.x, pos.y, 3, 0, Math.PI * 2 )
    c.fill()
    c.beginPath()
*/
    return pos
}
function desenhar( c, particula ) {
    let pos = { x: particula.pos.x , y: particula.pos.y }
    c.beginPath()
    c.fillStyle = particula.color
    c.arc( pos.x, pos.y, particula.size, 0, Math.PI * 2, false )
    c.fill()
}

export default desenharParticulas