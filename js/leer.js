function mostrarTexto() {
    var texto = document.getElementById("leer");
    var boton = document.getElementById("botons");

    if (texto.classList.contains("mostrar")) {
        texto.classList.remove("mostrar");  // Oculta el texto
        boton.value = "SEGUIR LEYENDO";     // Cambia el value del botón a "Mostrar"
      } else {
        texto.classList.add("mostrar");     // Muestra el texto
        boton.value = "OCULTAR";            // Cambia el value del botón a "Ocultar"
      }
  }

function mostrarTexto2() {
    var texto = document.getElementById("leer2");
    var boton = document.getElementById("botons2");

    if (texto.classList.contains("mostrar")) {
        texto.classList.remove("mostrar");  // Oculta el texto
        boton.value = "SEGUIR LEYENDO";     // Cambia el value del botón a "Mostrar"
      } else {
        texto.classList.add("mostrar");     // Muestra el texto
        boton.value = "OCULTAR";            // Cambia el value del botón a "Ocultar"
      }
  }

function mostrarTexto3() {
    var texto = document.getElementById("leer3");
    var boton = document.getElementById("botons3");

    if (texto.classList.contains("mostrar")) {
        texto.classList.remove("mostrar");  // Oculta el texto
        boton.value = "SEGUIR LEYENDO";     // Cambia el value del botón a "Mostrar"
      } else {
        texto.classList.add("mostrar");     // Muestra el texto
        boton.value = "OCULTAR";            // Cambia el value del botón a "Ocultar"
      }
  }