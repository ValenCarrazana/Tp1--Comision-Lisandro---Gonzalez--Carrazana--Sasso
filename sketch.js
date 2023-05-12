// Variable para contar los triángulos dibujados
let totalTriangulos = 0;
let tiempoInicial;
// Duración entre la generación de cada triángulo
let duracion = 250;
let img;

// Arreglo de triángulos 
let triangulos = [
  { x1: 100, y1: 100, x2: 200, y2: 200, x3: 300, y3: 100 },
  { x1: 30, y1: 75, x2: 58, y2: 20, x3: 86, y3: 75},
  { x1: 200, y1: 500, x2: 370, y2: 600, x3: 400, y3: 500 },
  { x1: 150, y1: 350, x2: 520, y2: 440, x3: 670, y3: 600 },
  { x1: 0, y1: 300, x2: 500, y2: 400, x3: 650, y3: 300 }
  
];

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
  if (totalTriangulos < triangulos.length) {
    let tiempoActual = millis();

    if (tiempoActual > tiempoInicial + duracion) {
      let triangulo = triangulos[totalTriangulos];

      // Dibuja el triángulo con textura o color aleatorio
      textura(mouseX);
      strokeWeight(3);
      beginShape();
      triangle(triangulo.x1, triangulo.y1, triangulo.x2, triangulo.y2, triangulo.x3, triangulo.y3);
      endShape(CLOSE);

      totalTriangulos++;
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
