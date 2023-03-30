import { cambiarJugador, checkWin,comprobarEmpate,jugadorActual,resetearJuego} from './game.js';
import { celdas,marcarCelda,result,reset} from './dom.js';

celdas.forEach( celda => celda.addEventListener("click", () =>{ 
        marcarCelda(celda, jugadorActual);
        if (checkWin(jugadorActual,celdas)) {
            console.log(checkWin(jugadorActual,celdas));
            result.textContent = `El ganador es ${jugadorActual}`;
            return;
        }
        if (comprobarEmpate(celdas,celdas)) {
            result.textContent = "Empate!"
        }
        cambiarJugador();
}))

reset.addEventListener("click", () => {
  resetearJuego(celdas,result)
});
 