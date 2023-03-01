let nextButtonId = "";
let nextFunction = "";
// function to blink button
const glowing = (id) =>
  (document.getElementById(id).style.animation = "glowing 1000ms infinite");

// function to add event listener
const enableClick = (id, callback) => {
  document.getElementById(id).addEventListener("click", callback);
};

// function to remove event listener
const disableClick = (id, callback) => {
  document.getElementById(id).removeEventListener("click", callback);
};

// Disable all click events
const disableAllClick = function () {
  disableClick("c", b);
  disableClick("b", d);
  disableClick("d",c);
  let blinkDisable = ["c", "b"];
  for (const id of blinkDisable) {
    document.getElementById(id).style.animation = "none";
  }
};

//function to move to next canvas
function navNext() {
  var canvas = document.getElementById("can");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 800, 600);
  initial();
  document.getElementById("canvas0").style.visibility = "hidden";
  document.getElementById("canvas1").style.visibility = "visible";
  document.getElementById("nextButton").style.animation = "none";
  document.getElementById("a").style.visibility = "visible";
  document.getElementById("b").style.visibility = "hidden";
  document.getElementById("c").style.visibility = "hidden";
  document.getElementById("d").style.visibility = "hidden";
  disableAllClick();
  document.getElementById("nextButton").style.animation = "none";
  document.getElementById("pumptext").style.visibility = "visible";
  document.getElementById("text").style.left = "100px";
  document.getElementById("stepnumber").innerHTML = "&nbsp;1&nbsp;";
  document.getElementById("text").innerHTML =
    "Draw the Top view as given";
  document.getElementById("titlestep").innerText = "STEP";
  document.getElementById("text").style.left = "95px";
  // document.getElementById("a").style.animation = "glowing 1000ms infinite";
  // nextButtonId = "a";
  // nextFunction = a;
  enableClick("a", a);
  glowing("a");
}
//initial projection
function initial() {
  var canvas = document.getElementById("can");
  var ctx = canvas.getContext("2d");
 /*  to get coordinates of the mouse 
 const getCursorPosition = (canvas, event) => {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  console.log(x, y)
}
canvas.addEventListener('mousedown', (e) => {
  getCursorPosition(canvas, e)
})*/
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "black";
  ctx.moveTo(30, 300);
  ctx.lineTo(350, 300);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "#3590ae";
//outside pentagon
  ctx.moveTo(300, 405);
  ctx.lineTo(300, 345);
  ctx.stroke();
  ctx.lineTo(245, 330);
  ctx.stroke();
  ctx.lineTo(200,375);
  ctx.stroke();
  ctx.lineTo(245,420 );
  ctx.stroke();
  ctx.lineTo(300, 405);
  ctx.stroke();
//inner penta
  ctx.moveTo(280, 390);
  ctx.lineTo(280, 360);
  ctx.stroke();
  ctx.lineTo(250, 350);
  ctx.stroke();
  ctx.lineTo(225,375);
  ctx.stroke();
  ctx.lineTo(250,400);
  ctx.stroke();
  ctx.lineTo(280, 390);
  ctx.stroke();
  //joining lines
  ctx.moveTo(300,405);
  ctx.lineTo(280, 390);
  ctx.stroke();
  ctx.moveTo(300,345);
  ctx.lineTo(280, 360);
  ctx.stroke();
  ctx.moveTo(245,330);
  ctx.lineTo(250, 350);
  ctx.stroke();
  ctx.moveTo(200,375);
  ctx.lineTo(225, 375);
  ctx.stroke();
  ctx.moveTo(245,420);
  ctx.lineTo(250, 400);
  ctx.stroke();
  ctx.closePath();
  
  ctx.font = "bold 15px comic sans MS";
  ctx.fillText("X", 10, 305);
  ctx.fillText("VP", 40, 290);
  ctx.fillText("HP", 40, 320);
  ctx.fillText("Y", 355, 305);
  ctx.fillText("c", 305, 405);
  ctx.fillText("b", 245, 435);
  ctx.fillText("d", 305, 355);
  ctx.fillText("e", 235, 325);
  ctx.fillText("1", 215, 375);
  ctx.fillText("2", 237, 410);
  ctx.fillText("3", 280, 405);
  ctx.fillText("4", 280, 355);
  ctx.fillText("5", 235, 350);
  ctx.fillText("Solid lines", 590, 25);
  ctx.fillText("Projection lines", 590, 45);

   document.getElementById("nextButton").style.animation =
     "glowing 1000ms infinite";
  ctx.beginPath();
  ctx.moveTo(575, 20);
  ctx.arc(575, 20, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#3590ae";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(575, 40);
  ctx.arc(575, 40, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#d9b28a";
  ctx.fill();
  ctx.closePath();
  glowing("nextButton"); 
  ctx.fillStyle ="#0d0d0d";
}

function drawLine(x1, y1, x2, y2, ratio) {
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(x1, y1);
  x2 = x1 + ratio * (x2 - x1);
  y2 = y1 + ratio * (y2 - y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  if (ratio > 1) {
    // document.getElementById(nextButtonId).style.visibility = "visible";
    enableClick(nextButtonId, nextFunction);
    glowing(nextButtonId);
  }
}

function animate(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02 );
    });
  }
}

function a() {
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "#3590ae";
  ctx.moveTo(300, 300);
  ctx.lineTo(200, 300);
  ctx.lineTo(225,200);
  ctx.lineTo(280,200);
  ctx.lineTo(300,300)
  ctx.moveTo(250,200);
  ctx.lineTo(245,300);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "#d9b28a";
  ctx.fillStyle = "black";
  ctx.setLineDash([]);
  ctx.fillText("a'", 190, 295);
  ctx.fillText("b'(e')", 245, 295);
  ctx.fillText("1'", 220, 195);
  ctx.fillText("2'(5')", 235, 195);
  ctx.fillText("3'(4')", 276, 195);
  animate(300, 345, 300, 300, 0);
  animate(200, 375, 200, 300);
  animate(245, 330, 245, 300);
  animate(280, 360, 280, 200);
  animate(250, 350, 250, 200);
  animate(225, 375, 225, 200);
  document.getElementById("c").style.visibility = "visible";
  ctx.closePath();
  document.getElementById("stepnumber").innerHTML = "&nbsp;2&nbsp;";
  document.getElementById("text").innerHTML =
    "Draw the Next corresponding front view ";
  document.getElementById("a").style.animation = "none";
  document.getElementById("nextButton").style.visibility = "hidden";
  document.getElementById("reset").style.visibility = "visible";
  // document.getElementById("c").style.animation = "glowing 1000ms infinite";
  disableClick("a", a);
  nextButtonId = "c";
  nextFunction = b;
  // enableClick("c", b);
  // glowing("c");
  // set up the canvas and context
}

function b() {
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  document.getElementById("b").style.visibility = "visible";
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(445,150);
  ctx.lineTo(377.5,420);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(465, 145);
  ctx.lineTo(465 + 20, 145 - 20);
  ctx.stroke();
  canvas_arrow(ctx, 400, 135, 465, 145, 4);
  ctx.fillText("Y1", 430, 135);
  ctx.fillText("X1", 382, 426);
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "#d9b28a";
  animate(225, 200, 500, 268);
  animate(250, 200, 542, 272);
  animate(280, 200, 528, 260);
  animate(200, 300, 470, 370);
  animate(245, 300, 530, 372);
  animate(300, 300, 502, 350);
  ctx.closePath();
  document.getElementById("stepnumber").innerHTML = "&nbsp;3&nbsp;";
  document.getElementById("text").innerHTML = "Draw the AIP as given";
  document.getElementById("c").style.animation = "none";
  // document.getElementById("b").style.animation = "glowing 1000ms infinite";
  disableClick("c", b);
  nextButtonId = "b";
  nextFunction = d;
  // enableClick("b", c);
  // glowing("b");
}

function canvas_arrow(context, fromx, fromy, tox, toy, r) {
  var x_center = tox;
  var y_center = toy;

  var angle;
  var x;
  var y;

  context.beginPath();

  angle = Math.atan2(toy - fromy, tox - fromx);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.moveTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.lineTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.lineTo(x, y);

  context.closePath();
  context.fillStyle = "black";

  context.fill();
}

function d(){
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  document.getElementById("d").style.visibility = "visible";
  //1
  ctx.beginPath();
  ctx.moveTo(500,270);
  ctx.arc(500,270, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  //2
  ctx.beginPath();
  ctx.moveTo(543, 273);
  ctx.arc(543, 273, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  //3
  ctx.beginPath();
  ctx.moveTo(529,262);
  ctx.arc(529,262, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  //4
  ctx.beginPath();
  ctx.moveTo(482,250.9);
  ctx.arc(482,250.9, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  //5
  ctx.beginPath();
  ctx.moveTo(466,254);
  ctx.arc(466,254, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  //a1
  ctx.beginPath();
  ctx.moveTo(472,369.1);
  ctx.arc(472,369.1, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  //b1
  ctx.beginPath();
  ctx.moveTo(532,372);
  ctx.arc(532,372, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  //c1
  ctx.beginPath();
  ctx.moveTo(503,350);
  ctx.arc(503,350, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  //d1
  ctx.beginPath();
  ctx.moveTo(457,338);
  ctx.arc(457,338, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  //e1
  ctx.beginPath();
  ctx.moveTo(426,346.1);
  ctx.arc(426,346.1, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = "#0d0d0d"
  ctx.fillStyle ="#0d0d0d";

  ctx.fillText("1",485 ,280);
  ctx.fillText("2",548,285);
  ctx.fillText("4",485,240);
  ctx.fillText("5",450,260);
  ctx.fillText("a1",470,385);
  ctx.fillText("b1",542,368);
  ctx.fillText("c1",511,347);
  ctx.fillText("d1",440,328);
  ctx.fillText("e1",400,348);
  document.getElementById("b").style.animation = "none";
  nextButtonId = "d";
  nextFunction = c;
  glowing("d");
}

function c() {
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  //document.getElementById("d").style.visibility = "invisible";
  document.getElementById("stepnumber").innerHTML = "&nbsp;4&nbsp;";
  document.getElementById("text").innerHTML = "Draw the auxiliary Front view as given";
  document.getElementById("b").style.visibility = "visible";
  document.getElementById("d").style.visibility = "invisible"
  ctx.beginPath();
  ctx.strokeStyle = "#3590ae";
  ctx.lineWidth = "2.5";
  ctx.moveTo(543,273);
  ctx.lineTo(532,372);
  ctx.lineTo(472,369.1); 
  ctx.lineTo(426,346.1);
  ctx.lineTo(466,254);
  ctx.lineTo(482,250.9);
  ctx.lineTo(529,262); 
  ctx.lineTo(543,273); 
  ctx.lineTo(500,270); 
  ctx.lineTo(466,254); 
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(472,369.1);
  ctx.lineTo(500,270);
  ctx.stroke();
  ctx.closePath();
  ctx.font = "bold 15px comic sans MS";
  ctx.fillText("Invisible line",590,65);
  ctx.beginPath();
  ctx.moveTo(575, 60);
  ctx.arc(575, 60, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#f89dfc";
  ctx.fill();
  ctx.closePath();

  ctx.strokeStyle = "#f89dfc";
  ctx.moveTo(426,346.1);
  ctx.lineTo(457,338);
  ctx.lineTo(503,350);
  ctx.lineTo(532,372);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(529,262);
  ctx.lineTo(503,350);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(482,250.9);
  ctx.lineTo(457,338);
  ctx.stroke();
  ctx.closePath();
    //1
    ctx.beginPath();
    ctx.moveTo(500,270);
    ctx.arc(500,270, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    //2
    ctx.beginPath();
    ctx.moveTo(543, 273);
    ctx.arc(543, 273, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    //3
    ctx.beginPath();
    ctx.moveTo(529,262);
    ctx.arc(529,262, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    //4
    ctx.beginPath();
    ctx.moveTo(482,250.9);
    ctx.arc(482,250.9, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    //5
    ctx.beginPath();
    ctx.moveTo(466,254);
    ctx.arc(466,254, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    //a1
    ctx.beginPath();
    ctx.moveTo(472,369.1);
    ctx.arc(472,369.1, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    //b1
    ctx.beginPath();
    ctx.moveTo(532,372);
    ctx.arc(532,372, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    //c1
    ctx.beginPath();
    ctx.moveTo(503,350);
    ctx.arc(503,350, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    //d1
    ctx.beginPath();
    ctx.moveTo(457,338);
    ctx.arc(457,338, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    //e1
    ctx.beginPath();
    ctx.moveTo(426,346.1);
    ctx.arc(426,346.1, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    document.getElementById("d").style.animation = "none";
    disableAllClick();
    ctx.fillStyle ="#0d0d0d";
}
