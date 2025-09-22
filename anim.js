// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No me imagine que funcionaba asi", time: 1 },
  { text: "No buscaba amor y un dia te encontré", time: 4 },
  { text: "Estaba vivo, pero con vos comencé a vivir", time: 7 },
  { text: "Fuiste una bendicion, me quede agradecer", time: 10 },
  { text: "Sos ese cuento del que no quiero saber el final", time: 13 },
  { text: "Ese cometa que tuve suerte de presenciar", time: 16 },
  { text: "El mundo es feo y su pasado provocó ansiedad", time: 19 },
  { text: "Miro al infierno, pero en tierra", time: 22 },
  { text: "Si algún dia de estos se hace gris tu cielo ", time: 25 },
  { text: "Lo pintarás mirando un rio", time: 28 },
  { text: "Las lágrimas y el frio te hicieron de hielo", time: 31 },
  { text: "Y dare la piel pa servir de abrigo", time: 34 },
  { text: "Y aunque el orgullo aveces ocultó mis miedos", time: 37 },
  { text: "Temo a caer y que no estés conmigo", time: 40 },
  { text: "Te ofrezco amor real de un corazon sincero", time: 42 },
  { text: "Y quemar la llave que abrió el laberinto", time: 45 },
  { text: "Si algún dia se hace gris tu cielo ", time: 48 },
  { text: "Lo pintarás mirando un rio", time: 51 },
  { text: "Las lágrimas y el frio te hicieron de hielo", time: 54 },
  { text: "Y dare la piel pa servir de abrigo", time: 57 },
  { text: "Y aunque el orgullo aveces ocultó mis miedos", time: 60 },
  { text: "Temo a caer y que no estés conmigo", time: 103 },
  { text: "Te ofrezco amor real de un corazon sincero", time: 106 },
  { text: "Y quemar la llave que abrió el laberinto", time: 109 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);