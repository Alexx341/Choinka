
document.getElementById("Ptwrdz").onclick= function(){
    let q = document.getElementById('inputTag').value;
    q = parseInt(q);
    Choinka(q)
}
function Choinka(q){
            let canvas = document.getElementById('myCanvas');
        let context = canvas.getContext('2d');
    let px1 = 800, py1 = 1000;
    let px2 = 200, py2 = 1000;
    let px3 = canvas.width/2, py3 = px1-px2;
    for(let i = 0;i<q;i++){
        context.beginPath();
        context.moveTo(px1, py1);
        context.lineTo(px2, py2);
        context.lineTo(px3, py3);
        context.closePath();
        context.fillStyle = 'green';
        context.fill();
        context.strokeStyle = 'green';
        context.stroke();
        temp = height(px1, py1, px2, py2, px3, py3);
        px1 = px1-podstawa(px1, py1, px2, py2, px3, py3)/4; 
        py1 = py1+temp;
        px2 = px2+podstawa(px1, py1, px2, py2, px3, py3)/4;  
        py2 = py2+temp;
        py3 = py3-height(px1, py1, px2, py2, px3, py3)/2;
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
function podstawa(px1, py1, px2, py2, px3, py3){
let a = Math.sqrt(Math.pow(px2 - px3, 2) + Math.pow(py2 - py3, 2));
let b = Math.sqrt(Math.pow(px1 - px3, 2) + Math.pow(py1 - py3, 2));
let c = Math.sqrt(Math.pow(px1 - px2, 2) + Math.pow(py1 - py2, 2));
var pods= Math.max(a, b, c);
return pods;
}