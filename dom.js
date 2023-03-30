export const celdas = document.querySelectorAll(".cell"); // celdas | celda
export let result = document.getElementById("result");
export let reset = document.getElementById("reset");

console.log(result)
// TODO Agregar un evento de click a cada celda con la funcion 'marcarCelda'


export function marcarCelda(celda, jugadorActual) {
    console.log(celda, jugadorActual)
    // Comprobar si la celda ya ha sido marcada
    if (celda.innerHTML !== "") {
      alert("Esta celda ya ha sido marcada. Por favor seleccione otra.");
      return;
    }
  
    // TODO Marcar la celda con el símbolo del jugador actual
    celda.innerHTML = jugadorActual;
    
} 
  
  
   
  