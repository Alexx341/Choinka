let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let kolor = 0;
const F = 0.1;
document.getElementById("Ptwrdz").onclick= function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    chain = [];
    let q = document.getElementById('inputTag').value;
    q = parseInt(q);
    Choinka(q)
}
function Choinka(q){

    let px1 = 800, py1 = 1000;
    let px2 = 200, py2 = 1000;
    let px3 = canvas.width/2, py3 = p3(px1,py1,px2,py2);
    for (let i = 0; i < q; i++) {

    
        let temp = Math.sqrt(Math.pow(px2 - px3, 2) + Math.pow(py2 - py3, 2));
        let h = height(px1, py1, px2, py2, px3, py3);
        context.beginPath();
        context.moveTo(px1, py1);
        context.lineTo(px2, py2);
        context.lineTo(px3, py3);
        context.closePath();
    
        context.fillStyle = 'green';
        context.fill();
        context.strokeStyle = 'green';
        context.stroke();

        
        px1 = px1 - 0.2*temp;
        py1 = py1-h*0.8
        px2 = px2 + 0.2*temp;
        py2 = py1; 
        py3 = p3(px1, py1, px2, py2);
        
        
      }
}
document.addEventListener("keydown", function(e) {
    if (e.key === "b") {
        kolor = (kolor + F) % (10 * Math.PI);
        drawRandomChain();
    }
});
function kolorSin(kolor) {
    let r = Math.abs(Math.sin(F * kolor + 0)) * 255;
    let g = Math.abs(Math.sin(F * kolor + (2 * Math.PI / 3))) * 255;
    let b = Math.abs(Math.sin(F * kolor + (4 * Math.PI / 3))) * 255;
    return `rgb(${r}, ${g}, ${b})`;
}
let chain = [];
canvas.onmousemove = function(e) {
    if (e.buttons == 1) {
        let pos = [e.offsetX, e.offsetY];
        chain.push(pos);
        drawRandomChain();
    }

};

function drawRandomChain() {

    for (lamp of chain) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.ellipse(lamp[0], lamp[1], 10, 10, 0, 0, Math.PI * 2);
        ctx.fillStyle = kolorSin(kolor);
        ctx.fill();  
    }
}


function height(px1, py1, px2, py2, px3, py3) {
let a = Math.sqrt(Math.pow(px2 - px3, 2) + Math.pow(py2 - py3, 2));
let b = Math.sqrt(Math.pow(px1 - px3, 2) + Math.pow(py1 - py3, 2));
let c = Math.sqrt(Math.pow(px1 - px2, 2) + Math.pow(py1 - py2, 2));
var pods= Math.max(a, b, c);
let hlf = (a + b + c) / 2;
let pole = Math.sqrt(hlf * (hlf - a) * (hlf - b) * (hlf - c));
let h = (2 * pole) / pods;
return h;
}
function p3(px1,py1,px2,py2){
let centerY = (py1 + py2) / 2;
let sideLength = Math.sqrt(Math.pow(px2 - px1, 2) + Math.pow(py2 - py1, 2));
let angle = Math.atan2(py2 - py1, px2 - px1);
let py3 = centerY - (sideLength / 2) * Math.sin(angle - (2 * Math.PI) / 3);
return py3
}
canvas.onclick = function(event){
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    context.beginPath();
    context.arc(mouseX, mouseY, 20, 0, 2 * Math.PI);
    context.stroke();
    context.closePath()
    context.fillStyle = 'red';
    context.fill();
    context.strokeStyle = 'red';
}


