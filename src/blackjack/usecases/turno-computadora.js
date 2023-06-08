import { crearCartaHtml, pedirCarta, valorCarta, } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos que la pc necesita para ganar
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora HTML para mostrar las cartas de la pc  
 * @param {Array<String>} deck baraja
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora, deck = [] ) => {


    if(!puntosMinimos) throw new Error('puntosMinimos son necesarios')
    if(!puntosHTML) throw new Error('Argumento es necesarios')

    let puntosComputadora = 0; 

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
