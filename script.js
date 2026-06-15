/** @type {HTMLCanvasElement} */
const c = document.getElementById("myCanvas")
const ctx = c.getContext("2d")

c.width = 800
c.height = 800
const width = c.width
const height = c.height

// Agora vamos criar um círculo usando somente linhas
const centerX = width/2
const centerY = height/2
const radius = 200
ctx.beginPath()
for (let angle = 0; angle <= 360; angle=angle+45) {
    const x = centerX + radius * Math.cos(angle * Math.PI/180)
    const y = centerY + radius * Math.sin(angle * Math.PI/180)
    ctx.lineTo(x, y)
}
ctx.stroke()

const step = 100
function desenharPlanoCartesiano() {
    // 1. Desenhando a malha de fundo (grid)
    ctx.beginPath();
    ctx.strokeStyle = "#e0e0e0"; // Cinza bem claro para não poluir
    ctx.lineWidth = 1;

    // Linhas verticais (cruzando o eixo X)
    for (let x = 0; x <= width; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }

    // Linhas horizontais (cruzando o eixo Y)
    for (let y = 0; y <= height; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "red";
    // O raio é 5 pixels para ficar delicado, indo de 0 a 2*PI (círculo completo)
    ctx.arc(width/2, height/2, 5, 0, Math.PI * 2);
    ctx.fill();
}
desenharPlanoCartesiano()