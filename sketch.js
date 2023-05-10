// Variable para contar los triángulos dibujados
let totalTriangulos = 0;
let tiempoInicial;
// Duración entre la generación de cada triángulo
let duracion = 250;
let img;

function preload() {
  img = loadImage('img/recurso1.png');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  background(0, 255, 0);
  tiempoInicial = millis();
  textureMode(NORMAL);
  img.loadPixels();
}

function draw() {
  if (totalTriangulos < 80) {
    // número de filas
    let rows = 6;
    // número de columnas
    let cols = 4;

    // ancho de cada columna
    let rectWidth = width / (cols + 1);

    // altura de cada fila
    let rectHeight = height / (rows + 1);

    let tiempoActual = millis();

    if (tiempoActual > tiempoInicial + duracion) {
      // Genera tamaños aleatorios para el triángulo
      let triangleSize = random(1, 2) * rectWidth;
      rotate(random(10,300));

      // Genera puntos aleatorios para los vértices del triángulo
      let x1 = random(cols + 1) * rectWidth - width/2;
      let y1 = random(rows + 1) * rectHeight - height/2;
      let x2 = x1 + random(-0.2, 0.2) * rectWidth;
      let y2 = y1 - triangleSize + random(-0.2, 0.2) * rectHeight;
      let x3 = x1 + triangleSize + random(-0.2, 0.2) * rectWidth;
      let y3 = y1 + random(-0.2, 0.2) * rectHeight;

      // Dibuja el triángulo con textura o color aleatorio
      textura(mouseX);
      strokeWeight(3);
      beginShape();
      triangle(x1, y1, x2, y2, x3, y3);
      endShape(CLOSE);

      // Incrementa el contador de triángulos dibujados
      totalTriangulos++;

      // Actualiza el tiempo inicial para el siguiente triángulo
      tiempoInicial = millis();
    }
  }
}

function textura(x) {
  // muestra la textura solo cuando el ratón se mueve hacia la derecha
  if (x > width / 2) {
    texture(img);
  } else {
    noFill();
    let greenShade = random(100, 200);
    fill(0, greenShade, 0);
  }
}
