/**
 * 
 * @param {String} carta
 * @returns {HMTLImageElement} Elemento de retorno  
 */


export const crearCartaHtml = (carta) => {

    if (!carta) throw new Error('El valor de la carta es necesario')
      // <img class="carta" src="assets/cartas/2C.png">
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
      imgCarta.classList.add('carta');

      return imgCarta
}