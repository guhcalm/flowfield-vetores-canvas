function desenharVetores( ctx, coordenadas, vetores ) {
    //console.log( 'Os vetores estão sendo desenhados...' )

    let c = ctx
    let unidades = coordenadas.malha.unidades
    let intervalo = coordenadas.malha.intervalo

    for ( let x = 0; x <= unidades.x; x++ ) {
        for ( let y = 0; y <= unidades.y; y++ ) {
            let xi = x * intervalo.x
            let yi = y * intervalo.y
            let dx = vetores[x][y].dx
            let dy = vetores[x][y].dy

            c.beginPath()
            c.lineWidth = 1
            c.strokeStyle = 'white'
            c.moveTo( xi, yi )
            c.lineTo( xi + dx, yi + dy )
            c.stroke()
        }
    }

    //console.log( '... Os vetores foram desenhados.' )
}
export default desenharVetores