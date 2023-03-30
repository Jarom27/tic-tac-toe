const player1 = "X";
const player2 = "O";

// Variables para llevar la cuenta de los turnos y el jugador actual
export let turnoActual = 1;
export let jugadorActual = player1;
export function comprobarEmpate(celdas) {
    for (let i = 0; i < celdas.length; i++) {
      if (celdas[i].innerHTML === "") {
        return false;
      }
    }
  
    return true;
  }
export function cambiarJugador() {
    // Cambiar al siguiente jugador
    turnoActual++;
    jugadorActual = turnoActual % 2 === 0 ? player2 : player1;
}
// Función para comprobar si el jugador actual ha ganado
export function checkWin(player,celdas) {
    // Comprobar las combinaciones ganadoras
    console.log(player)
    console.log(celdas);
    if (
      celdas[0].innerHTML === player &&
      celdas[1].innerHTML === player &&
      celdas[2].innerHTML === player
    ) {
      return true;
    } else if (
      celdas[3].innerHTML === player &&
      celdas[4].innerHTML === player &&
      celdas[5].innerHTML === player
    ) {
      return true;
    } else if (
      celdas[6].innerHTML === player &&
      celdas[7].innerHTML === player &&
      celdas[8].innerHTML === player
    ) {
      return true;
    } else if (
      celdas[0].innerHTML === player &&
      celdas[3].innerHTML === player &&
      celdas[6].innerHTML === player
    ) {
      return true;
    } else if (
      celdas[1].innerHTML === player &&
      celdas[4].innerHTML === player &&
      celdas[7].innerHTML === player
    ) {
      return true;
    } else if (
      celdas[2].innerHTML === player &&
      celdas[5].innerHTML === player &&
      celdas[8].innerHTML === player
    ) {
      return true;
    } else if (
      celdas[0].innerHTML === player &&
      celdas[4].innerHTML === player &&
      celdas[8].innerHTML === player
    ) {
      return true;
    } else if (
      celdas[2].innerHTML === player &&
      celdas[4].innerHTML === player &&
      celdas[6].innerHTML === player
    ) {
      return true;
    }
  
    // Si ninguna combinación ganadora se cumple, retornar false
    return false;
  }
  export function resetearJuego(celdas,result) {
    turnoActual = 1;
    jugadorActual = player1;

    celdas.forEach( celda => celda.innerHTML = "")
    result.innerHTML = ""
  }
